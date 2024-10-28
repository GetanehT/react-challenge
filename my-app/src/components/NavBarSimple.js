import React from 'react';
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            message: "Hello, Guest",
            buttonText: "Log in",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => 
            {
            console.log("previous state:", prevState); 
            console.log("previous Props:", prevProps); 
            return{
        
             message:
             prevState.message ===  "Welcome back user" ? "Hallo, Guest" : "Welcome back user",
             buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
  
        };
    });
}



    
    render() {
        return ( 
          <div className = {css.NavBar}>
            <h1>My Gallery</h1>
            
            <span> {this.state.message} </span>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>

          

             </div>
        )

    }
}



export default NavBarSimple;



