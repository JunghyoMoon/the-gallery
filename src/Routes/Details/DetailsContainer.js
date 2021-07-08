import React, { Component } from "react";
import DetailsPresenter from "./DetailsPresenter";

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
        };
    }

    render() {
        console.log(this.props);
        return <DetailsPresenter />;
    }
}

export default DetailsContainer;
