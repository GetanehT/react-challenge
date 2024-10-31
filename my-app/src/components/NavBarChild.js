import React from 'react';

function NavBarChild(props) {
  return (
 
      props.isLoggedin ? 
        
          <button onClick={props.clickHandler}>Login</button> 
          
          :
          <form>
            <label htmlFor="username">Username:</label>
            <input placeholder='username' id="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password" id="password" />

            <button type="button" onClick={props.clickHandler}>Submit</button>
          </form>
        
      
  )
}

export default NavBarChild;
