import React, {Component} from "react";
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';
import DishDetail from "./DishdetailComponent";

class Menu extends Component {

    constructor (props){
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log('Menu componente constructor')
    }

    componentDidMount(){
        console.log('Menu componente componentDidMount')
    }
    onDishSelect(plato){
            this.setState({selectedDish: plato})
    }

    renderDish(plato){
        if(plato != null){
            return(
                <DishDetail  plato= {plato} />
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
                        <Card onClick={()=>this.onDishSelect(x)}>
  
                                <CardImg width="100%" src={x.image} alt={x.name} />

                            <CardImgOverlay >
                                <CardTitle>{ x.name }</CardTitle>
                                <CardTitle>{ x.comments.comments }</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        
                </div> 
            );
            
        } );
        
        console.log('Menu componente render')
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
export default Menu ;
