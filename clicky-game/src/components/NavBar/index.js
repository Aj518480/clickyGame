import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function NavBar (props) {
  return (

<NavBar>
  <NavBar.Brand >Mario's Clicky Game</NavBar.Brand>
  <NavBar.Toggle />
  <NavBar.Collapse className="justify-content-end">
    <NavBar.Text>
    <p className="wins" onClick={props.handleIncrement}>
      </p>{"0"}
      <p className="loses" onClick={props.handleDecrement}>
       {"0"}
      </p>
    </NavBar.Text>
  </NavBar.Collapse>
</NavBar>

  );
}

export default NavBar;