import React, {Component}from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';
class DishDetail extends Component{

    constructor(props){
        super(props);
        this.state={
            comments : []
        }
    }

    onSelect(comment){
        this.setState({ comments: comment })
    }

    renderComments(comment){
        if(comment.length > 0){ 
            return (
                <div>
                    <h4>Comentarios</h4>
                    {
                    comment.map(item => {
                        return <>
                            <p>{item.comment}</p>
                            <p>{item.author}, {item.date}</p>
                        </>
                    })
                    }
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    render(){
        return(
            <>
            <div className="col-12 col-md-5 m-1">
            <Card>
                    <CardImg width="100%" src={this.props.plato.image} alt={this.props.plato.name} title={this.props.plato.name} />
                    <CardBody>
                    <CardTitle>{this.props.plato.name}</CardTitle>
                    <CardText>{this.props.plato.description}</CardText>
                    
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <Card>
                    
                
            <h4>Comentarios</h4>
                    <CardText>{this.props.plato.comments.map((el) => (
                        <ul key={el.id} >
                           
                            <p>{el.comment}</p>
                            <li>{el.author}</li>
                            
                        </ul>
                    ))}</CardText>
</Card>
            </div>
            </>
        )
    }
}
export default DishDetail


