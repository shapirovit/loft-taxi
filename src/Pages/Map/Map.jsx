import React, { Component } from 'react';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcGlyb3ZldCIsImEiOiJjazY2MW1tZ20wdWpxM25vN29tNDQ4aHY2In0.9w-ICwV8xa_L-pwWR6nU6A';

/* var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcGlyb3ZldCIsImEiOiJjazY2MW1tZ20wdWpxM25vN29tNDQ4aHY2In0.9w-ICwV8xa_L-pwWR6nU6A';
var map = new mapboxgl.Map({
  container: 'box',
  style: 'mapbox://styles/mapbox/streets-v11'
});
 */

/* const Map = (props) => {

    return (
        <>
            <h1>Карта</h1>
            <div>Тут будет карта</div>
            <div id='box'></div>
        </>
    )

} */

class Map extends Component {
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9'
        });
    }
    
    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const style = {
            position: 'absolute',
            top: '80px',
            bottom: 0,
            width: '100%'
        };

        return (
            <>
                <h1>Карта</h1>
                <div style={style} ref={el => this.mapContainer = el} />;
            </> 
        )       
    }
}

export default Map;