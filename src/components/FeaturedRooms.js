import React, { useContext } from 'react'
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import { RoomContext } from "../context";

console.log("FeaturedRooms");

export default function FeaturedRooms() {
  const context = useContext(RoomContext);
  const { loading, featuredRooms: rooms } = context;

  const roomsFeatured = rooms.map(room => {
      console.log("room.id:", room.id);
      console.log("room.room:", room);
      return <Room key={room.id} room={room} />
    });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomsFeatured}
      </div>
    </section>
  );
}