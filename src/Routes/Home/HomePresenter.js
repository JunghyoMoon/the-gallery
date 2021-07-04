import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paginate from "react-paginate";
import Thumbnail from "../../Components/Thumbnail";

const Container = styled.div`
    width: 100%;
`;

const ArtContainer = styled.div``;

const SPaginate = styled(Paginate)``;

const HomePresenter = ({
    loading,
    error,
    artworks,
    total_pages,
    handlePageChange,
}) =>
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
            <SPaginate
                pageCount={total_pages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                previousLabel={"Prev"}
                containerClassName={"pagination"}
                onPageChange={handlePageChange}
            />
        </Container>
    );

export default HomePresenter;
