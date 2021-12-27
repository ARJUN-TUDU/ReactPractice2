import React from 'react'
import tours from '../../tours';
import { useState } from 'react';
import{Container,Button,Image,Card,Carousel,Row,Col,Badge,Accordion} from 'react-bootstrap'

import { FaCarSide,FaWalking,FaClock,FaBus,FaBookmark,FaAngleDown,FaRegLaughBeam,MdDirectionsWalk } from "react-icons/fa";
import '../../tourscreen.css';
import { VscMilestone } from "react-icons/vsc";





function ControlledCarousel({image}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            alt="First slide"
            
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  


  const TourScreen = ({match}) => {

    const tour = tours.find((p)=>p._id ===match.params.id)
    return (
        <div className="mybox ">         
        <Accordion>
        <Row className="my-2">
             <h1 className="text-center text-white my-3">Your tour</h1>
            <Col lg={6} sm={12}>
            <div className="my-3">
            <Card style={{border:'none'}} className ="shadow-lg">                  
                      <Card.Img src={tour.image}  fluid />  
              
             <Card.Body>
                    <div className= "text-dark"   style = {{flex:'1' ,textAlign:'left'}}>
                    <h4>{tour.name} </h4>
                    
                    {tour.price}/-
                    <p></p> 
                    <p>mg elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
 
  Line 228:9:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative</p>                    
                    
                    </div>     
                    <div style ={{flex:"1" , textAlign:'right' , width:'10'}} className  = "mx-1 p-1 " >
                    
                      <Accordion.Toggle as={Button} className="px-4 rounded mybutton shadow bg-primary "  eventKey="0" >
                       Book
                    </Accordion.Toggle> 
                   
                      <p></p>
                      <Button className="  px-5 rounded mybutton shadow">Gallery</Button>
                              
                    
                    </div>
                </Card.Body>   
            </Card>
            
            </div>            
            </Col> 
            <Accordion.Collapse eventKey="0">

                  <div class="bg-warning p-5 ">

    <Row>
     
      <Col lg={6} sm = {12}>
      <div class="row d-flex justify-content-center">  
                            <div class="col-md-6">                                     
                              <form class="text-center" action="#!">

                                <p class="h4 mb-4">Sign up</p>

                                <div class="form-row mb-4">
                                  <div class="col">
                                  
                                    <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name"></input>
                                  </div>
                                  <div class="col">
                                    
                                    <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name"></input>
                                  </div>
                                </div>

                              
                                <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail"></input>

                              
                                <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password"></input>
                                
                                <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                  At least 8 characters and 1 digit
                                </small>

                                <input type="number" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number"></input>
                              
                                <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

                              </form>
                              

                            </div>

                            </div>

      </Col>

    </Row>












 </div>

          </Accordion.Collapse>      
            <Col lg={6} sm={12} >
            <Container>
            <ol class="step pl-0">
                    <li class="step-element pb-0">
                      <div class="step-number">
                        <span class="number">1</span>
                      </div>
                      <div class="step-excerpt text-white bg-dark mybutton">
                            <h1>DHOTREY - TUMLING</h1>
                      </div>
                    </li>

                    <li class="step-element pb-0">
                      <div class="step-number">
                        <span class="number">1</span>
                      </div>
                      <div class="step-excerpt mybutton">
                            <h1>wadwadwa</h1>
                      </div>
                    </li>
         
        </ol>        
           </Container> 
                                      
            </Col>
     
        </Row>

        <p></p>
  
        <Accordion.Collapse eventKey="1">
        <div class="row align-items-center">



<div class="col-lg-12 mb-4">

  <div id="mdb-lightbox-ui"></div>

  <div class="d-grid mdb-lightbox">
    <figure class="item">
      <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
        class="z-depth-1 rounded" data-size="1600x1067">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg" />
      </a>
    </figure>
    <figure class="item">
      <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
        class="z-depth-1 rounded" data-size="1600x1067">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg" />
      </a>
    </figure>
    <figure class="item">
      <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
        class="z-depth-1 rounded" data-size="1600x1067">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg" />
      </a>
    </figure>
    <figure class="item">
      <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
        class="z-depth-1 rounded" data-size="1600x1067">
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg" />
      </a>
    </figure>
  </div>

</div>

</div>
        </Accordion.Collapse>
        

       </Accordion>

       
        
    
        </div>
        
       
    )
}


export default TourScreen ;