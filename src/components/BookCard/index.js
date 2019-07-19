import React from 'react';

function BookCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description ? props.description : "No description available"}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>{props.}</ListGroupItem>
                <ListGroupItem>{props.author}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={props.link}>View More Info</Card.Link>
                <Card.Link href="#">Save Book</Card.Link>
            </Card.Body>
            </Card>
    )
}

export default BookCard;