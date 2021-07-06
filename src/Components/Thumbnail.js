import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box;
    break-inside: avoid;
`;

const Image = styled.img``;

const LinkTo = styled(Link)``;

const Title = styled.span``;

const Thumbnail = ({ title, imgUrl }) => (
    <Container>
        <Image src={imgUrl} alt={title} />
        <Title>{title}</Title>
    </Container>
);

export default Thumbnail;
