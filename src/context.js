import React, { useEffect, useReducer } from 'react'
import Client from "./Contentful";
console.log("context");

const RoomContext = React.createContext();

function RoomProvider(props) {
	const initialState = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
		type: 'all',
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false
	};
  
  const [state, dispatch] = useReducer((state, newState) => ({...state, ...newState}), initialState);
  
	useEffect(() => {
    const getData = async () => { 
      try {
        let response = await Client.getEntries({
          content_type: "beachResortRoomExample",
          order: "sys.createdAt"
        });
        let rooms = formatData(response.items);
        console.log("context-getData:",rooms);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        console.log("context-featuredRooms:",featuredRooms);
        console.log("context-maxPrice:",maxPrice);
        console.log("context-maxSize:",maxSize);

        dispatch({
          rooms,
          featuredRooms,
          sortedRooms: rooms,
          loading: false,
          price: maxPrice,
          maxPrice,
          maxSize
        });
    
      } catch (error) {
        console.log(error);
      }
		};
		getData()
	}, [])

	const formatData = items => {
		let tempItems = items.map(item => {
			let id = item.sys.id;
			let images = item.fields.images.map(image => image.fields.file.url);
	  
			let room = { ...item.fields, images, id };
			return room;
		});
		return tempItems;
	};
	
	const getRoom = slug => {
		let tempRooms = [...state.rooms];
		const room = tempRooms.find(room => room.slug === slug);
		return room;
	};
	
	const handleChange = event => {
    console.log("handleChange");
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
   
		dispatch({
		  [name] : value
    });
  };

 

  const filterRooms = () => {
    console.log("filterRooms");
    let {
      rooms, 
      type, 
      capacity, 
      price,
      minSize, 
      maxSize, 
      breakfast, 
      pets
    } = state

       // all the rooms
    let tempRooms = [...rooms];

    // transform value from string to integer
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if(type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // filter by capacity
    if(capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

    // filter by breakfast
    if(breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    //filter by pets
    if(pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    console.log("Count:",tempRooms.length);

    // change state
    dispatch({
      sortedRooms: tempRooms
    });
  };

  useEffect(() => {
    filterRooms();
    // eslint-disable-next-line
  },[state.rooms, state.type, state.capacity,state.price,state.minSize,state.maxSize,state.breakfast,state.pets]);

	return (
		<RoomContext.Provider 
		value={{ 
		  ...state, 
		  getRoom: getRoom,
      handleChange: handleChange,
		}}>
		  {props.children}
		</RoomContext.Provider>
	 );
}

export { RoomProvider, RoomContext };
