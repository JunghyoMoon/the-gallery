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

const Image = styled.img`
    width: 100%;
    max-width: 500px;
    max-height: fit-content;
`;

const Title = styled.span``;

const Thumbnail = ({ id, title, imgUrl }) => (
    <Link to={`/${id}`}>
        <Container>
            <Image src={imgUrl} alt={title} />
            <Title>{title}</Title>
        </Container>
    </Link>
);

Thumbnail.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    imgUrl: PropTypes.string,
};

export default Thumbnail;
