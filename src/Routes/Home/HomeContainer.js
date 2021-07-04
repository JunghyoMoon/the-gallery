import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { getArt } from "../../api";
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
    state = {
        loading: true,
        error: null,
        artworks: null,
        current_page: null,
        limit: null,
        total_pages: null,
    };

    async componentDidMount() {
        try {
            const {
                pagination: { current_page, limit, total_pages },
                data: { data },
            } = await getArt.artList();
            this.setState({ artworks: data, current_page, limit, total_pages });
        } catch {
            this.setState({ error: "Cannot get artworks' list." });
        } finally {
            this.setState({ loading: false });
        }
    }

    handlePageChange(pageNumber) {
        console.log();
    }

    render() {
        const { loading, error, artworks, current_page, limit, total_pages } =
            this.state;
        console.log(artworks);
        return (
            <>
                <HomePresenter
                    loading={loading}
                    error={error}
                    artworks={artworks}
                />
                <Pagination
                    totalItemsCount={total_pages}
                    activePage={current_page}
                    onChange={this.handlePageChange.bind(this)}
                />
            </>
        );
    }
}

export default HomeContainer;
