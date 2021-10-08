import React, {Component} from "react";
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

class Menu extends Component {

    constructor (props){
        super(props);
        this.state = {
            selectedDish: null
        }

    }

    onDishSelect(plato){
            this.setState({selectedDish: plato})
    }

    renderDish(plato){
        if(plato != null){
            return(
                <Card>
                    <CardImg width="100%" src={x.image} alt={x.name} />
                    <CardBody>
                        
                    </CardBody>
                </Card>
            )
        }else{
            return(
                <div>

                </div>
            )
        }

    }
    render(){
        const menu = this.props.platos.map((x)=>{
            return(
                <div key={x.id} className="col-12 col-md-5 m-1">
                        <Card onClick={()=>this.onDishSelect(plato)}>
  
                                <CardImg width="100%" src={x.image} alt={x.name} />

                            <CardImgOverlay >
                                <CardTitle>{ x.name }</CardTitle>
                            </CardImgOverlay>
                        </Card>
                </div>
            );
        } );
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
            </div>
        );
    }
}
export default Menu ;
