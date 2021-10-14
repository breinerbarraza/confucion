import React from "react";
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';




    const RenderDish = ({dish}) =>{
        if(dish !== null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} title={dish.name}/>
                    <CardBody>
                        <CardTitle heading = "true">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
            )
        }

    }

    const RenderComments = ({comment}) => {
        if(comment !== undefined){
            return (
                    <div className="col-12 col-md-5 m-1">
                            <Card>
                            <h4 className="text-center">Comentarios</h4>
                                <CardText>
                                {
                                    comment.map(item => {
                                        return <div key={item.id}>
                                            <p>{item.comment}</p>
                                            <p>{item.author}, {item.date}</p>
                                        </div>
                                    })
                                }
                                </CardText>
                            </Card>
                        </div>
            )
        }else{
            return(
                <div></div>
            )
        }
       
    }
   
    const DishDetail = ( props )=>{ 
                return (
                  <>
                  { props.dish  && (
                        <div className="container">
                        <div className="row">
                            <RenderDish dish={props.dish} />
                            <RenderComments comment={props.dish.comments} />
                            
                            </div>
                    </div> 
                  )}
                  </>
                );
    }


export default DishDetail;