import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Thumbnail from "../../Components/Thumbnail";
import Loader from "../../Components/Loader";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ArtContainer = styled.div`
    width: 90%;
    column-count: 1;
    column-gap: 0;
    counter-reset: item-counter;

    @media screen and (min-width: 1000px) {
        column-count: 2;
    }
    @media screen and (min-width: 1600px) {
        column-count: 3;
    }
    @media screen and (min-width: 2200px) {
        column-count: 4;
    }
`;

const HomePresenter = ({
    loading,
    error,
    artworks,
    total_pages,
    handlePageChange,
}) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            <ArtContainer>
                {artworks &&
                    artworks.length > 0 &&
                    artworks.map((work) => (
                        <Thumbnail
                            id={work.id}
                            title={work.title}
                            imgUrl={`https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`}
                        />
                    ))}
            </ArtContainer>
        </Container>
    );

export default HomePresenter;
