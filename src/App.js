import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent';
import { PLATOS } from './shared/platos';

class App extends Component{

  constructor(props){
      super(props);

      this.state={
        platos: PLATOS
      };
  }

  render(){
    return(
      <div >
            <Navbar dark color="primary">
                <div className="container">
                  <NavbarBrand href="/">Ristorante Con Funcion</NavbarBrand>
                  
                </div>
            </Navbar>
            <Menu  platos={this.state.platos}/>
      </div>
    )
  }
}

export default App;
