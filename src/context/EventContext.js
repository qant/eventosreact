import React, { Component } from "react";
import axios from "axios";

const EventContext = React.createContext();

export const EventConsumer = EventContext.Consumer;

class EventProvider extends Component {
  state = { events: [] };

  token = "JJGPJBJUR32AB2ZPOALD";
  orden = "date";

  getEvents = async search => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${
      search.name
    }&categories=${search.category}&sort_by=${this.orden}&token=${
      this.token
    }&locale=es_ES`;

    let events = await axios.get(url);

    console.log(events.data.events);

    this.setState({
      events: events.data.events
    });
  };

  render() {
    return (
      <EventContext.Provider
        value={{
          events: this.state.events,
          getEvents: this.getEvents
        }}
      >
        {this.props.children}
      </EventContext.Provider>
    );
  }
}

export default EventProvider;
