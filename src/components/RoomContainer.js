import React from 'react'
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { RoomContext } from "../context";
import Loading from "./Loading";
console.log("RoomContainer");

export default function RoomContainer() {
  return (
    <RoomContext.Consumer>
      {
        (value) => {
          const {loading, sortedRooms, rooms} = value;
          if (loading) {
            return <Loading />;
          }
          return (
            <div>
            {/* Hello From Rooms Container */}
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
          );
        }
      }

    </RoomContext.Consumer>

  );
}



// import React from 'react'
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomList";
// import { withRoomConsumer, RoomConsumer } from "../context";
// import Loading from "./Loading";

// function RoomContainer({context}){
//   const {loading, sortedRooms, rooms} = context;
  
//   if (loading) {
//       return <Loading />;
//   }
//   return (
//     <div>
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </div>
//   );
// }

// export default withRoomConsumer(RoomContainer);