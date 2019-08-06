import React, { Component } from "react";
import axios from "axios";

//Create context
const CategoryContext = React.createContext();

export const CategoryConsumer = CategoryContext.Consumer;

class CategoryProvider extends Component {
  token = "JJGPJBJUR32AB2ZPOALD";

  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategory();
  }

  getCategory = async () => {
    // eslint-disable-next-line
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${
      this.token
    }&locale=es_ES`;
    let categories = await axios.get(url);

    this.setState({
      categories: categories.data.categories
    });
  };

  render() {
    return (
      <CategoryContext.Provider
        value={{
          categories: this.state.categories
        }}
      >
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}

export default CategoryProvider;
