import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const Post = () => {
    return (
        <Col md={4} className='mb-5'>
            <Card>
                <Card.Img variant='top' src='./images/b-01.jpg' alt='b-01' />
                <Card.Body>
                    <Card.Title>바그다드 여행
                        <small>
                            <span>중동</span>
                            <span>무전여행</span>
                        </small>
                    </Card.Title>
                    <Card.Text>
                        여행 이야기
                    </Card.Text>
                    <Button variant="dark">바로가기</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Post;