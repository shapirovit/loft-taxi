import React, { useEffect } from 'react';
import './FormMap.css';
import { Paper, Button, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { statusCard } from "../../moduls/statusCard";
import { connect } from 'react-redux';
import { getStatusCardStatus } from '../../moduls/statusCard';

const mapStateToProps = (state) => {
    return {        
        cardStatus: getStatusCardStatus(state),
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

const FormMap = (props) => {
    const { handleClick, cardStatus } = props;

    useEffect(() => {
        handleClick("map");
    });

    const classes = {
        formOrder: {
            margin: "24px 20px",
            padding: "42px 46px",
            boxSizing: "border-box",
            width: "392px",
            height: "315px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1
        }
    };

    const adressTest = [
        { adress: 'Пулково (LED) '},
        { adress: 'Шаверма на Невском'},
        { adress: 'Инфекционная больница им. Боткина'},
        { adress: 'Волковское кладбише'}
    ];

    return (
        <>
        { (cardStatus) &&
            <>
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
            </>
        }
    </>
    )
    
    

}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )( FormMap )