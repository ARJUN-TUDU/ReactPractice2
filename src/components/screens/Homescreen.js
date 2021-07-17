import React from 'react';
import tours from '../../tours';
import {Row,Col,Container} from 'react-bootstrap';
import Tours from '../Tours';


const Homescreen = () => {
    return (
        <div>
            <Row>
              {tours.map(tours =>(
                  <Col xs={12}  lg={3} >
                      <Tours tours = {tours}/>
                  </Col>
              ))}


            </Row>
        </div>
    )
}

export default Homescreen;
