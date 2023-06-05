import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiFacebookBoxFill, RiInstagramFill, RiKakaoTalkFill, RiTwitterFill } from 'react-icons/ri';

const Header = () => {
    return (
        <header>
            <Container className='py-4'>
                <Row className='justify-content-between align-items-center'>
                    <Col xs={2} className='sns-icons'>
                        <RiFacebookBoxFill className='facebook' />
                        <RiTwitterFill className='twitter' />
                        <RiInstagramFill className='instagram' />
                        <RiKakaoTalkFill className='kakaotalk' />
                    </Col>
                    <Col xs={8} className='text-center'>
                        <p className='display-6 fw-bold'>YOON's BLOG</p>
                    </Col>
                    <Col xs={2} className='text-end'>
                        <span className="mx-2" to="/">로그인</span>
                        <span className="mx-2" to="/">회원가입</span>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;