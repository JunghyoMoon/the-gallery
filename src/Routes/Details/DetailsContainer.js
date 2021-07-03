import React, { Component } from "react";
import DetailsPresenter from "./DetailsPresenter";


class DetailsContainer extends Component {
    state = {
        loading: true,
        artworks: null,
    }

    render() {
        return <DetailsPresenter />
    }
}

export default DetailsContainer;