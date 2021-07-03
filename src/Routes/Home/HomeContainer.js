import React, { Component } from "react";
import HomePresenter from "./HomePresenter";


class HomeContainer extends Component {
    state = {
        loading: true,
        artworks: null,
    }

    render() {
        return <HomePresenter />
    }
}

export default HomeContainer;