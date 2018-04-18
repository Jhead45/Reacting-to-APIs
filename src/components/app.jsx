import React, { Component } from "react";
import Film from "./film";
import Species from "./species";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loaded: null 
    };
  }

  handleClick = () => {
    this.setState({ loaded: true });
  };

  handleClick2 = () => {
    this.setState({ loaded: false });
  };
  



  render() {
        let switchCards;
        switch(this.state.loaded) {
          case true:
            return(
              switchCards = <Film />)
              break;
          case false:
            return(
              switchCards = <Species />)
              break;
          default:
            return (
              <div>
                <img 
        src="https://ghibliapi.herokuapp.com/images/logo.svg"
        alt="Created by"/><br />
              <div className="button" onClick={() => this.handleClick()}>Load Films</div><br />
              <div className="button" onClick={() => this.handleClick2()}>Load Species</div></div>)
      }


   
      
    }
  };


export default App;


