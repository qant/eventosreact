import React from "react";
import { EventConsumer } from "../context/EventContext";
import { Event } from "./Event";

const ListEvents = () => {
  return (
    <div className="uk-child-width-1-3@" uk-grid="true">
      <EventConsumer>
        {value => {
          return value.events.map(e => console.log(e.id));
        }}
      </EventConsumer>
    </div>
  );
};

export default ListEvents;
