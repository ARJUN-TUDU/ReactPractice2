import React from 'react';
import {Col,Row,Container,Card} from 'react-bootstrap';
import blogs from '../../blogs';
import BlogCards from '../BlogCards';

const BlogScreen = () => {
    return (
            <Container className = "">
                <Row>
                {blogs.map(blogs=>(
                    <Col key={blogs._id}>
                        <BlogCards blogs={blogs}></BlogCards>
                    </Col>
                ))}
            </Row>



  
            </Container>
    )
}

export default BlogScreen
