import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css';

function BookCard(props) {
    return (
        <div>
            <Card>
                {/* {console.log(props)} */}
                <Card.Img variant="top"  id='bookImage' src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.description && props.description.length > 200 ? props.description.substr(0, 200) + '...' : "No description available"}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{props.author}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={props.link}>View More Info</Card.Link>
                    <Card.Link href="#">Save Book</Card.Link>
                </Card.Body>
            </Card>
            <br/>
        </div>
    
    )
}

export default BookCard;