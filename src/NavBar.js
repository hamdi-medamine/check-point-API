import React from 'react';
import { Navbar } from 'react-bootstrap';
import userlogo from '../src/userlogo.jpg'


function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={userlogo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{' '}
      <h1 style={{textAlign:'center'}}>User List</h1>
    </Navbar.Brand>
  </Navbar>
        </div>
    )
}

export default NavBar
