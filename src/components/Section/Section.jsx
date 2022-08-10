import PropTypes from 'prop-types';
import { Component } from "react";

export class Section extends Component {

    render() {
        const { title } = this.props;
        return (
            <h2>{title}</h2>
        )
    }
};