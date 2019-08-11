import React, { Fragment } from "react";
import Header from "./components/Header";
import CategoryProvider from "./context/CategoryContext";
import Form from "./components/Form";
import EventProvider from "./context/EventContext";
import ListEvents from "./components/ListEvents";
//https://www.eventbriteapi.com/v3/users/me/?token=GYEGZ33PYVDUFK7DWAD6

function App() {
  return (
    <EventProvider>
      <CategoryProvider>
        <Header />
        <div className="uk-column">
          <Form />
          <ListEvents />
        </div>
      </CategoryProvider>
    </EventProvider>
  );
}

export default App;
