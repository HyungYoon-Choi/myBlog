import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RiFacebookBoxFill, RiInstagramFill, RiKakaoTalkFill, RiTwitterFill } from 'react-icons/ri';
import Navigation from '../component/Navigation';

const Header = () => {
    return (
        <header className='header'>
            <Container className='py-4'>
                <Row className='justify-content-between align-items-center'>
                    <Col xs={2} className='sns-icons'>
                        <RiFacebookBoxFill className='facebook' />
                        <RiTwitterFill className='twitter' />
                        <RiInstagramFill className='instagram' />
                        <RiKakaoTalkFill className='kakaotalk' />
                    </Col>
                    <Col xs={8} className='text-center'>
                        <p className='display-6 fw-bold'><Link to="/">YOON's BLOG</Link></p>
                        <Navigation />
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