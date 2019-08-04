import React, { Component } from "react";

class Form extends Component {
  state = { name: "", category: "" };
  render() {
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Search Event by Name or Category
          </legend>
        </fieldset>
        <div className="uk-column-1-3@m uk-margin">
          <div className="uk-margin" uk-margin="true">
            <input
              name="name"
              className="uk-input"
              type="text"
              placeholder="Name of Event or City"
            />
          </div>
          <div className="uk-margin" uk-margin="true">
            <select className="uk-select" name="category">
              Gen with Cnsumer
            </select>
          </div>
          <div>
            <input
              type="submit"
              className="uk-button uk-button-danger"
              value="Search Event"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
