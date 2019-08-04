import React, { Fragment } from "react";
import Header from "./components/Header";
import CategoryProvider from "./context/CategoryContext";
import Form from "./components/Form";
//https://www.eventbriteapi.com/v3/users/me/?token=GYEGZ33PYVDUFK7DWAD6

function App() {
  return (
    <CategoryProvider>
      <Header />
      <div className="uk-column">
        <Form />
      </div>
    </CategoryProvider>
  );
}

export default App;
