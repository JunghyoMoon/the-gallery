import React, { Component } from "react";
import { getArt } from "../../api";
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
    state = {
        loading: true,
        error: null,
        artworks: null,
        pagination: null,
    };

    async componentDidMount() {
        try {
            const {
                data: { data },
            } = await getArt.artList();
            const {
                data: { pagination },
            } = await getArt.artList();
            this.setState({
                artworks: data,
                pagination,
            });
        } catch {
            this.setState({ error: "Cannot get artworks' list." });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, error, artworks, pagination } = this.state;
        console.log(artworks, pagination);
        return (
            <div>
                <HomePresenter
                    loading={loading}
                    error={error}
                    artworks={artworks}
                />
            </div>
        );
    }
}

export default HomeContainer;
