import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Clock = styled.span`
    font-size: 50px;
`;

const Message = styled.h1`
    margin-top: 20px;
    font-size: 30px;
`;

const Loader = () => (
    <Container>
        <Clock role="image">⏰</Clock>
        <Message>Loading..</Message>
    </Container>
);

export default Loader;
