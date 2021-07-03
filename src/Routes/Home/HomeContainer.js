import React, { Component } from "react";
import { getArt } from "../../api";
import HomePresenter from "./HomePresenter";


class HomeContainer extends Component {
    state = {
        loading: true,
        error: null,
        artworks: null,
    }

    async componentDidMount() {
        try {
            const { data: { data }} = await getArt.artList();
            this.setState({artworks: data})
        } catch {
            this.setState({error: "Cannot get artworks' list."})
        } finally {
            this.setState({loading: false})
        }
    }

    render() {
        const {loading, error, artworks} = this.state;
        console.log(artworks);
        return <HomePresenter loading={loading} error={error} artworks={artworks}/>
    }
}

export default HomeContainer;