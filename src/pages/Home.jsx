import React from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import Post from './Post';
import { Container, Row } from 'react-bootstrap';
import Slider from './Slider';

const Containers = styled.div`
    max-width: 100%;
    width: 1320px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;

const Posts = styled.div`
    flex: 9;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const Home = () => {
    return (
        <>
            <Slider />
            <Containers>
                <Posts>
                    <Container>
                        <Row className='my-5'>
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                            <Post />
                        </Row>
                    </Container>
                </Posts>
                <Aside />
            </Containers>
        </>
    );
};

export default Home;