import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 1400px) {
        flex-direction: row;
    }
`;

const Img = styled.img`
    height: 95%;
`;

const DataContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`;

const Item = styled.span``;

const DetailsPresenter = ({ loading, error, details }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <Img
                src={`https://www.artic.edu/iiif/2/${details.image_id}/full/843,/0/default.jpg`}
                alt={details.alt_text}
            />
            <DataContainer>
                <Item>{details.title}</Item>
                <Item>{details.date_display}</Item>
                <Item>{details.artist_display}</Item>
                <Item>{details.medium_display}</Item>
                <Item>{details.dimensions}</Item>
                <Item>{details.place_of_origin}</Item>
            </DataContainer>
        </Container>
    );

export default DetailsPresenter;
