import React, {Component} from "react";
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor (props){
        super(props);

        this.state = {
            dishes:[
                {
                    id:0,
                    name:'Uthappizza',
                    image:'assets/images/uthappizza.png',
                    category:'mains',
                    label:'Hot',
                    price:'4.99',
                    desciption:'Plato de los mejores'
                },
                {
                    id:1,
                    name:'Zucchi',
                    image:'assets/images/zucchipakoda.png',
                    category:'Zucchi',
                    label:'',
                    price:'1.99',
                    desciption:'Plato de los mejores',
                },
                {
                    id:2,
                    name:'Vadonunt',
                    image:'assets/images/vadonut.png',
                    category:'Vadonunt',
                    label:'',
                    price:'1.89',
                    desciption:'Plato de los mejores',
                },
                {
                    id:3,
                    name:'Elaicheesecake',
                    image:'assets/images/elaicheesecake.png',
                    category:'Elaicheesecake',
                    label:'',
                    price:'1.333',
                    desciption:'Plato de los mejores',
                }     
            ]
        }
    }
    render(){
        const menu = this.state.dishes.map((x)=>{
            return(
                <div key={x.id} className="col-12 mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media object src={x.image} alt={x.name} />
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>{ x.name }</Media>
                                <p>{ x.desciption }</p>
                            </Media>
                        </Media>
                </div>
            );
        } );
        
        return(
            <div className="container">
                <div className="row">
                        <Media list >
                                {menu}
                        </Media>
                </div>
            </div>
        );
    }
}

export default Menu ;
