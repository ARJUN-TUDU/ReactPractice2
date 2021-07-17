import React from 'react'
import {Card,Container} from 'react-bootstrap';


const BlogCards = ({blogs}) => {
    return (
        <Card className="my-2">
            <Card.Img src={blogs.image}/>
            <Container className="">
                {blogs.name}
            </Container>
             
                 
             
             
        </Card>
    )
}

export default BlogCards
 