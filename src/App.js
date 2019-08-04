import React, { Fragment } from "react";
import Header from "./components/Header";
import CategoryProvider from "./context/CategoryContext";

//https://www.eventbriteapi.com/v3/users/me/?token=GYEGZ33PYVDUFK7DWAD6

function App() {
  return (
    <CategoryProvider>
      <Header />
    </CategoryProvider>
  );
}

export default App;
