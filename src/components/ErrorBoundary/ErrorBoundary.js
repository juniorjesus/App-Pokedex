import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    render() {
        if (this.state.error) {
            return <h1>Something goes wrong</h1>
        }

        return this.props.children;
    }
}