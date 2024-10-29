import React, { Component } from 'react';
import css from "./css/NavBarForm.module.css";


export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin: true,
      }
    }
    clickHandler() {
        console.log("log in")
    }
  render() { 
    return (
      <div ><h1 className = {css.NavBar}>Galleryx</h1>
      <button onClick={this.clickHandler}>log in</button>


      {this.state.isLoggedin ?  ( 
          <form>
           <label htmlfor = "username">username:</label>
           <input placeholder='username' id="username" />

           <label htmlfor = "password">password::</label>
           <input placeholder='password' id="password" />

           <button onClick={this.clickHandler}>Submit</button>
            </form>
      ) : ( <p>please sign in</p>

      ) }
   
      </div>
    )
  }
}

export default NavBarForm