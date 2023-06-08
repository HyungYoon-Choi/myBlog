import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Post = ({ id, writer, img, categorya, categoryb, title, content, wdate }) => {
    return (
        <Col md={4} className='mb-5'>
            <Card>
                <Card.Img variant='top' src={img} alt={img} />
                <Card.Body>
                    <Card.Title>{id}. {title} <br />
                        <small>
                            <span>{categorya}</span>
                            <span>{categoryb}</span>
                        </small>
                    </Card.Title>
                    <Card.Text>
                        {content} {wdate}
                    </Card.Text>
                    <div className="btnbox">{writer}
                        <Button variant="dark">바로가기</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Post;