import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Thumbnail from "../../Components/Thumbnail";

const Container = styled.div``;

const ArtContainer = styled.div``;

const Pages = styled.ul``;

const HomePresenter = ({ loading, error, artworks }) =>
    loading ? null : (
        <Container>
            <ArtContainer>
                {artworks &&
                    artworks.length > 0 &&
                    artworks.map((work) => (
                        <Thumbnail
                            title={work.title}
                            imgUrl={`https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`}
                        />
                    ))}
            </ArtContainer>
        </Container>
    );

export default HomePresenter;
