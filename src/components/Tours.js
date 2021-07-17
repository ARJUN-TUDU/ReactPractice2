import React from 'react';
import {Card,Container,Image,Badge,Accordion,Button,Row,Col} from 'react-bootstrap';
import { HiDotsVertical ,HiArrowNarrowRight ,HiChevronDown } from "react-icons/hi";
import { FaClock,FaBus} from "react-icons/fa";
import TourScreen from './screens/TourScreen';
import { Link } from 'react-router-dom';
import "./screens/cardstyle.css"




const Tours = ({tours}) => {
    return (
    <Card className="my-2 mycardcopy">
                    
            <Card.Img src={tours.image} style={{height:200}} fluid/>
                    
                <Container className="p-2">
                  <Accordion > 
                           <Row>
                               <Col>
                                <Accordion.Toggle as={Button} variant ="link" eventKey="0" >
                                   <HiChevronDown />
                                </Accordion.Toggle>
                               </Col>
                               
                               <Col className="my-3 ">
                              
                                  {tours.price}/-
                              
                               </Col>
                               
                           </Row>
                           
                            <Accordion.Collapse eventKey="0">
                             
                            <Card.Body>
                                
                                <div style={{fontWeight:'bold'}}>
                                    
                                {tours.name}
                                    <p></p>        
                                    
                                </div>

                     
                           <div className="bg-primary text-white p-1 rounded shadow-lg">
                           <ul className="">
                                
                                <p></p>
                                <div> <FaClock className="mx-1"/>- 25/6/21</div>
                                <p></p>
                                
                                <p>such a beutiful place</p>
                            </ul>
                           </div>
                                     
                                <p></p>
                                <Link to = {`/tour/${tours._id}`}>
                                     <HiArrowNarrowRight/>
                                </Link>
                            </Card.Body>
                            </Accordion.Collapse>
                        
                    </Accordion>
                  </Container>
    </Card>
        
    )
}

export default Tours

