import React, { Component } from 'react';
import './Map.css';
import { Paper, Button, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
            zIndex: '-10'            
        };

        const classes = {
            formOrder: {
                margin: "24px 20px",
                padding: "42px 46px",
                boxSizing: "border-box",
                width: "392px",
                height: "315px",
                display: "flex",
                flexDirection: "column"
            }
        };

        const adressTest = [
            { adress: 'Пулково (LED) '},
            { adress: 'Шаверма на Невском'},
            { adress: 'Инфекционная больница им. Боткина'},
            { adress: 'Волковское кладбише'}
        ];

        return (
            <div className="map-page">
                <div style={style} ref={el => this.mapContainer = el} />
                <Paper style={classes.formOrder } rounded = "true" >
                    <Autocomplete
                    id="combo-box-demo-from"
                    options={adressTest}
                    getOptionLabel={option => option.adress}
                    style={{ marginBottom: "40px" }}
                    renderInput={params => (
                        <TextField {...params} label="Откуда" fullWidth />
                    )}
                    />
                    <Autocomplete
                    id="combo-box-demo-to"
                    options={adressTest}
                    getOptionLabel={option => option.adress}
                    style={{ marginBottom: "40px" }}
                    // style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Куда" fullWidth />
                    )}
                    />
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Вызвать такси
                    </Button>
                </Paper>
            </div>
        )       
    }
}

export default Map;