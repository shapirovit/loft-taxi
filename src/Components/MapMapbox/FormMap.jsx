import React, { useEffect, useState, useCallback } from 'react';
import './FormMap.css';
import { Link } from 'react-router-dom';
import { Paper, Button, TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { statusCard } from "../../moduls/statusCard";
import { connect } from 'react-redux';
import { getStatusCardStatus,
         getAddressIsFetching,
         getAddressIsFetched,
         getAddressAddresses,
         getAddressError,
         fetchAddressRequest } from '../../moduls/fetchAddress';
import { getStatusOrderStatus, fetchRouteRequest } from '../../moduls/fetchRoute';
import { statusOrder } from "../../moduls/statusOrder";


const mapStateToProps = (state) => {
    return {        
        cardStatus: getStatusCardStatus(state),
        addressIsFetching: getAddressIsFetching(state),
        addressFetched: getAddressIsFetched(state),
        addresses: getAddressAddresses(state),
        addressError: getAddressError(state),
        orderStatus: getStatusOrderStatus(state),
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
        addFetchAddress: () => {
            dispatch(fetchAddressRequest())
        },
        addFetchRoute: (obj) => {
            dispatch(fetchRouteRequest(obj))
        },
        addStatusOrder: (obj) => {
            dispatch(statusOrder(obj))
        },
    }
}

const FormMap = (props) => {
    const { handleClick, cardStatus, addresses, orderStatus, addFetchRoute, addStatusOrder } = props;

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
        },
        formBlock: {
            margin: "24px 20px",
            padding: "42px 46px",
            boxSizing: "border-box",
            width: "520px",
            height: "315px",
            display: "flex",
            flexDirection: "column",
            zIndex: 1
        },
        subText: {
            marginBottom: "30px"
        },

    };

    const [selectFieldFrom, setSelectFieldFrom] = useState("");
    const [selectFieldTo, setSelectFieldTo] = useState("");

    const showAddressesFrom = useCallback( (options) => {
        options = options.filter(adress => adress !== selectFieldTo );
        return options;
    }, [selectFieldTo] );

    const showAddressesTo = useCallback( (options) => {
        options = options.filter(adress => adress !== selectFieldFrom );
        return options;
    }, [selectFieldFrom] );

    const handleChangeFrom = (event, value, reason) => {
        if ( (reason === "reset") || (reason === "clear") ) {
            setSelectFieldFrom(value);
        }
    }

    const handleChangeTo = (event, value, reason) => {
        if ( (reason === "reset") || (reason === "clear") ) {
            setSelectFieldTo(value);
        }
    }

    const handleClickButtonOrder = (event) => {
        console.log("Нажали на кнопку вызова такси!!!");
        let order = {
            address1: selectFieldFrom,
            address2: selectFieldTo,
        };
        addFetchRoute(order);

        // нужно:
        // 1) отправить экшен, чтобы вызвать сагу fetchRoute
        // 2) в саге вызвать отрисовку нового слоя на карте
    }

    const handleClickButtonNewOrder = (event) => {
        console.log("Нажали на кнопку, чтобы сделать новый заказ!!!");
        addStatusOrder( {status: false} );
        setSelectFieldFrom("");
        setSelectFieldTo("");
        localStorage["statusOrder"] = JSON.stringify({status: false});
        // нужно менять параметр statusOrder отправляя action в reducer.
    }


    return (
        <>
        { (!cardStatus) &&
            <>
                <Paper style={classes.formBlock } rounded = "true" >
                    <Typography style={classes.subText} align="left" variant="h4" component="h2">Заполните платежные данные</Typography>
                    <Typography style={classes.subText} align="left">Укажите информацию о банковской карте, чтобы сделать заказ.</Typography>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/profile"
                        size="large"
                    >
                        Перейти в профиль
                    </Button>
                </Paper>
            </>
        }

        { (cardStatus && !orderStatus) &&
            <>
                <Paper style={classes.formOrder } rounded = "true" >
                    <Autocomplete
                    id="combo-box-demo-from"
                    onInputChange={handleChangeFrom}
                    options={addresses}
                    getOptionLabel={option => option}
                    // filterSelectedOptions={true}
                    filterOptions={showAddressesFrom}
                    // renderOption={showAddressesFrom}

                    style={{ marginBottom: "40px" }}
                    renderInput={params => (
                        <TextField {...params} label="Откуда" fullWidth />
                    )}
                    />
                    <Autocomplete
                    id="combo-box-demo-to"
                    onInputChange={handleChangeTo}
                    options={addresses}
                    getOptionLabel={option => option}
                    filterOptions={showAddressesTo}
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
                        // disabled={ !completeDoubleAddress }
                        disabled={ (selectFieldFrom === "") || (selectFieldTo === "") || (selectFieldFrom === selectFieldTo)  }
                        onClick={handleClickButtonOrder}
                        size="large"                        
                    >
                        Вызвать такси
                    </Button>
                </Paper>
            </>
        }

{ (cardStatus && orderStatus) &&
            <>
                <Paper style={classes.formOrder } rounded = "true" >
                    <Typography style={classes.subText} align="left" variant="h4" component="h2">Заказ размещён</Typography>
                    <Typography style={classes.subText} align="left">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</Typography>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"                        
                        size="large"
                        onClick={handleClickButtonNewOrder}
                    >
                        Сделать новый заказ
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