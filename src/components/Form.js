import React, { Component } from "react";
import { CategoryConsumer } from "../context/CategoryContext";
import { EventConsumer } from "../context/EventContext";

class Form extends Component {
  state = { name: "", category: "" };

  getFormData = e => {
    this.setState({
      [e.target.name]: e.target.value //ej. name: Blah
    });
  };

  render() {
    return (
      <EventConsumer>
        {value => {
          return (
            <form
              onSubmit={
                //arrow funct for get acces to state
                e => {
                  e.preventDefault();
                  value.getEvents(this.state);
                }
              }
            >
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
                    onChange={this.getFormData}
                  />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="category"
                    onChange={this.getFormData}
                  >
                    <option value="" data-uk-form-select>
                      --Select Category--
                    </option>
                    <CategoryConsumer>
                      {value => {
                        return value.categories.map(cat => (
                          <option
                            key={cat.id}
                            value={cat.id}
                            data-uk-form-select
                          >
                            {cat.name_localized}
                          </option>
                        ));
                      }}
                    </CategoryConsumer>
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
        }}
      </EventConsumer>
    );
  }
}

export default Form;
