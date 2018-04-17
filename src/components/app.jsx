import React, { Component } from "react";
import Card from "./card";
import "isomorphic-fetch";
import "es6-promise";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { films: [], loaded: false };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(result => result.json())
      // .then(film => film.this.state.entries())
      .then(films => {
        this.setState({ films });
      });
  }
  handleClick = () => {
    this.setState({ loaded: !this.state.loaded });
  };

  render() {
    if (this.state.loaded === true) {
      return (
       
          <div>
            {this.state.films.map(film => <Card key={film.id} value={film} />)}
          </div>
       
      );
    } else {
      return (
        <div>
        <img
          src="https://ghibliapi.herokuapp.com/images/logo.svg"
          alt="Films Created by"
        />
        <button value={this.state.loaded} onClick={this.handleClick}>
          Load Films
        </button>
      </div>
      );
    }
  }
}

export default App;
