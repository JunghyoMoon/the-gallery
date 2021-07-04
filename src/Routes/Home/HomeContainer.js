import React, { Component } from "react";
import { getArt } from "../../api";
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
    state = {
        loading: true,
        error: null,
        artworks: null,
        total_pages: null,
        current_page: null,
    };

    getArtWorksInfo = async (pageNum) => {
        try {
            const {
                data: {
                    data,
                    pagination: { total_pages, current_page },
                },
            } = await getArt.artList(pageNum);
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
    };

    handlePageChange = (data) => {
        console.log(data);
        const { selected } = data;
        this.setState({ loading: true });
        this.getArtWorksInfo(selected);
    };

    componentDidMount() {
        this.getArtWorksInfo(1);
    }

    render() {
        const { loading, error, artworks, total_pages } = this.state;
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
