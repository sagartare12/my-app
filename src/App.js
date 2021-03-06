//import logo from './logo.svg';
import React, { Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap'
import { render } from '@testing-library/react';
import MenuComponent from './component/MenuComponent';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <NavbarBrand href="/">Sagar
        </NavbarBrand>
      </Navbar>
      <MenuComponent />
     
     
    </div>
  );
  }
}

export default App;
