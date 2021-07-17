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
            <Card style={{border:'none'}} >                  
                      <img src={tour.image} className='w-100 rounded shadow' alt="First" />      
            </Card>
             <div className="rounded  text-dark p-1 my-3">
               <ul>
                    <h4 className="myfont ">{tour.name}</h4>
                    <p></p> 
                    <h1 className="myfont"> {tour.price}/-</h1>
                    <p></p>                    
                    <Accordion.Toggle as={Button} className="rounded mybutton shadow-lg bg-primary "  eventKey="0" >
                       BOOK
                    </Accordion.Toggle>                     
                    <Accordion.Toggle as={Button} className="rounded mybutton shadow-lg bg-primary mx-2 "  eventKey="1" >
                        Gallery
                    </Accordion.Toggle>                   
               </ul>
               </div>
            </div>            
            </Col>       
            <Col lg={6} sm={12} >
            <div className="pb-5 ">
                                  <ol class="step pl-0">
                                                          <li class="step-element text-white pb-4">                                                     
                                                      <div class="step-number">                                                    
                                                        <h1 class="number bg-warning text-white font-weight-bold">3</h1>
                                                      </div>                                                     
                                                      <div class="step-excerpt shadow-lg rounded bg-dark  p-3 mybutton">
                                                        <h3 class="font-weight-bold text-white  mb-3"> Dhotrey - Tumling</h3>
                                                        <hr></hr>
                                                         <Row>
                                                           <Col className="myboxx text-center">
                                                           <VscMilestone />10km
                                                           </Col>

                                                           <Col className="myboxx">
                                                           <FaClock/>  5hrs
                                                           </Col>
                                                           <Col className="myboxx" >
                                                           <FaWalking/>
                                                           </Col>
                                                         </Row>                                                        
                                                      </div>
                                                    </li>
                                                    <li class="step-element text-white pb-4">
                                                      
                                                      <div class="step-number">    
                                                                                                     
                                                        <h1 class="number bg-warning text-white font-weight-bold">3</h1>
                                                      </div>                                                     
                                                      <div class="step-excerpt shadow-lg rounded bg-dark  p-3 mybutton">
                                                        <h3 class="font-weight-bold text-white  mb-3"> Dhotrey - Tumling</h3>
                                                        <hr></hr>
                                                         <Row>
                                                           <Col className="myboxx">
                                                           <VscMilestone /> 10km
                                                           </Col>

                                                           <Col className="myboxx">
                                                           <FaClock/>  5hrs
                                                           </Col>
                                                           <Col className="myboxx" >
                                                           <FaWalking/>
                                                           </Col>
                                                         </Row>                                                        
                                                      </div>
                                                    </li>
                                                    <li class="step-element text-white pb-4">
                                                      
                                                      <div class="step-number">    
                                                                                                     
                                                        <h1 class="number bg-warning text-white font-weight-bold">3</h1>
                                                      </div>                                                     
                                                      <div class="step-excerpt shadow-lg rounded bg-dark  p-3 mybutton">
                                                        <h3 class="font-weight-bold text-white  mb-3"> Dhotrey - Tumling</h3>
                                                        <hr></hr>
                                                         <Row>
                                                           <Col className="myboxx text-center">
                                                           <VscMilestone /> 10km
                                                           </Col>

                                                           <Col className="myboxx">
                                                           <FaClock/>  5hrs
                                                           </Col>
                                                           <Col className="myboxx" >
                                                           <FaWalking/>
                                                           </Col>
                                                         </Row>                                                        
                                                      </div>
                                                    </li>

                                                    <li class="step-element text-white pb-4">
                                                      
                                                      <div class="step-number">    
                                                                                                     
                                                        <h1 class="number bg-warning text-white font-weight-bold">3</h1>
                                                      </div>                                                     
                                                      <div class="step-excerpt shadow-lg rounded bg-dark  p-3 mybutton">
                                                        <h3 class="font-weight-bold text-white  mb-3"> Dhotrey - Tumling</h3>
                                                        <hr></hr>
                                                         <Row>
                                                           <Col className="myboxx text-center">
                                                           <VscMilestone /> 10km
                                                           </Col>

                                                           <Col className="myboxx">
                                                           <FaClock/>  5hrs
                                                           </Col>
                                                           <Col className="myboxx" >
                                                           <FaWalking/>
                                                           </Col>
                                                         </Row>                                                        
                                                      </div>
                                                    </li>                                                   
                                                  </ol>         
              </div>                  
            </Col>
            

            
        </Row>

        <p></p>
        
        <Accordion.Collapse eventKey="0">

        <div class="bg-warning p-5 ">

            <Row>
              <Col lg={4} >
                  
              </Col>
              <Col lg={8}>
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