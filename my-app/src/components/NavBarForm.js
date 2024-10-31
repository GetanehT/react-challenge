import React, { Component } from 'react';
import css from "./css/NavBarForm.module.css";
import NavBarChild from './NavBarChild';

class NavBarForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedin: true,
    };
  }
  
  clickHandler = () => {
    this.setState((prevState) => ({
      isLoggedin: !prevState.isLoggedin, // Toggle login state
    }), () => console.log(this.state.isLoggedin));
  }
  
  render() { 
    return (
      <div className={css.NavBar}>
        <h1>Gallery</h1>
      
        <NavBarChild
          isLoggedin={this.state.isLoggedin} 
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default NavBarForm;
