import React, { Component } from "react";
import { getArt } from "../../api";
import DetailsPresenter from "./DetailsPresenter";

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            result: null,
        };
    }

    async componentDidMount() {
        const {
            history: { push },
            match: {
                params: { id },
            },
        } = this.props;
        const parsedId = parseInt(id);
        if (isNaN(parsedId) || !parsedId) {
            return push("/");
        }
        try {
            const {
                data: { data },
            } = await getArt.artDetails(parsedId);
            this.setState({ result: data });
        } catch {
            this.setState({ error: "Can't get detailed datas." });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, error, result } = this.state;
        return (
            <DetailsPresenter
                loading={loading}
                error={error}
                details={result}
            />
        );
    }
}

export default DetailsContainer;
