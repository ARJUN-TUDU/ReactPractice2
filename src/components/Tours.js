import React from 'react';
import {Card,Container,Image,Badge,Accordion,Button,Row,Col} from 'react-bootstrap';
import { HiDotsVertical ,HiArrowNarrowRight ,HiChevronDown } from "react-icons/hi";
import { FaClock,FaBus} from "react-icons/fa";
import TourScreen from './screens/TourScreen';
import { Link } from 'react-router-dom';
import "./screens/cardstyle.css"




const Tours = ({tours}) => {
    return (
   
    <Card className="my-2 ">
                    
            <Card.Img src={tours.image} style={{height:200}} fluid/>
            
                <Card.Body>

                         
                          
                           <Row>
                               <Col className = "pt-3">
                                
                                <Link to = {`/tour/${tours._id}`}>
                                     <Button >{tours.name}</Button>
                                </Link>
                                
                               </Col>
                               
                               <Col className="text-dark pt-4">
                              
                                 <div> <h6>{tours.price}/-</h6> </div>
                              
                               </Col>
                               
                           </Row>
                           
                            
                      
                        
                   
                 
                  </Card.Body>
    </Card>
        
    )
}

export default Tours

