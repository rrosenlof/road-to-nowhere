import React, { Component } from 'react';

class MapQuest extends Component {

    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        const mapStyle = {
            height: this.state.height,
            width: this.state.width
        };
        return (
            <div id="map" style={mapStyle}>
                <p>loading...</p>
            </div>
        );
    }

    componentDidMount() {
        // L.mapquest.key = `${process.env.KEY}`;

        // L.mapquest.map('map', {
        //     center: this.state.center,
        //     zoom: this.state.zoom
        // })
        return null
    }
    
}

export default MapQuest