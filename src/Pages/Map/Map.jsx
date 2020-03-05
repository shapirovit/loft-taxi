import React, { Component } from 'react';
import './Map.css';
import statusCard from "../../Actions/statusCard";
import { connect } from 'react-redux';
import FormMap from "../../Components/FormMap";

const mapStateToProps = (state) => {
    return {        
        cardStatus: state.statusCard.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /* addActivePage: (page) => {
            dispatch(activePage(page))
        },
        addFetchCard: (card) => {
            dispatch(fetchCardRequest(card))
        }, */
        addStatusCard: (obj) => {
            dispatch(statusCard(obj))
        },
    }
}

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcGlyb3ZldCIsImEiOiJjazY2MW1tZ20wdWpxM25vN29tNDQ4aHY2In0.9w-ICwV8xa_L-pwWR6nU6A';

class Map extends Component {
    componentDidMount() {

        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.33, 59.93],
            zoom: 13,
        });
    }
    
    componentWillUnmount() {
        this.map.remove();
    }

    render() {

        const style = {
            position: 'absolute',
            top: '0px',
            bottom: '0px',
            width: '100%',
        };

        return (
            <div className="map-page">
                <div style={style} ref={el => this.mapContainer = el} />
                <FormMap handleClick={this.props.handleClick} />
            </div>
        )       
    }
}

// export default Map;

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )( Map )