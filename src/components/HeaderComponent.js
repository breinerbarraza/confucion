import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {
    render(){
            return(
                    <>
                          <Navbar dark color="primary">
                                    <div className="container">
                                            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                                    </div>
                            </Navbar>
                            <Jumbotron>
                                    <div className="container">
                                            <div className="row row-header">
                                                    <div className="col-12 col-sm-6">
                                                            <h1>Reistorante Con Fusion</h1>
                                                            <p>We take inspirate from the World's best cuisines, and create a unique fusion experience. 0ur lipsmacking creations willtickle your culinary sences!</p>
                                                    </div>
                                            </div>
                                    </div>
                            </Jumbotron>
                    </>
            );
    }
}

export default Header
