import React, { Component } from 'react';


export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clock'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Clock />
            </div>
        );
    }
}

