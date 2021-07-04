import React, { Component } from "react";
import { getArt } from "../../api";
import HomePresenter from "./HomePresenter";
import Paginate from "react-paginate";

class HomeContainer extends Component {
    state = {
        loading: true,
        error: null,
        artworks: null,
        total_pages: null,
        current_page: null,
    };

    async handlePageChange(data) {
        const { selected } = data;
        console.log(selected);
        try {
            const {
                data: {
                    data,
                    pagination: { total_pages, current_page },
                },
            } = await getArt.artList(selected);
            this.setState({
                artworks: data,
                total_pages,
                current_page,
            });
            console.log(this.state);
        } catch {
            this.setState({ error: "Cannot get artworks' list." });
        } finally {
            this.setState({ loading: false });
        }
    }

    async componentDidMount() {
        try {
            const {
                data: {
                    data,
                    pagination: { total_pages, current_page },
                },
            } = await getArt.artList(1);
            this.setState({
                artworks: data,
                total_pages,
                current_page,
            });
        } catch {
            this.setState({ error: "Cannot get artworks' list." });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, error, artworks, total_pages } = this.state;
        console.log(artworks, total_pages);
        return (
            <HomePresenter
                loading={loading}
                error={error}
                artworks={artworks}
                total_pages={total_pages}
                handlePageChange={this.handlePageChange}
            />
        );
    }
}

export default HomeContainer;
