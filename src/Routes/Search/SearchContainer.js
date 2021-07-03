import React, {Component} from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
    state = {
        loading: false,
        whatever: null,
    }

    render() {
        return <SearchPresenter />
    }
}

export default SearchContainer;