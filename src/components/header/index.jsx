import React, { Component } from 'react';
import styled from 'styled-components';

const Topo = styled.div`
    background-color: rgba(12, 12, 12, 1.0);
    color: rgba(204, 204, 204, 1.0);
    font-family: "Consolas", monospace;
    font-size: 15px;
    padding: 100px 100px 100px 100px;
`;

export default class Topos extends Component {
    state = {
        Folder: true,
    };

    render() {
        const { Folder } = this.state;
        return (
            <div>
                <Topo>teste</Topo>
            </div>
        )
    }

}