import React, { useEffect, useState/* , useCallback */ } from 'react';
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
    }
}

const FormMap = (props) => {
    const { handleClick, cardStatus, addresses, /* orderStatus, */ addFetchRoute } = props;

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

    // const adressTest = [
    //     { adress: 'Пулково (LED) '},
    //     { adress: 'Шаверма на Невском'},
    //     { adress: 'Инфекционная больница им. Боткина'},
    //     { adress: 'Волковское кладбише'}
    // ];

    // let indexFrom;
    // let indexTo;
    let addressFrom = addresses.slice();
    let addressTo = addresses.slice();
    // let selectFieldFrom = "";
    // let selectFieldTo = "";

    // const [completeDoubleAddress, setCompleteDoubleAddress] = useState(false);

    const [selectFieldFrom, setSelectFieldFrom] = useState("");
    const [selectFieldTo, setSelectFieldTo] = useState("");

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

    // const handleChangeFrom = (event, value, reason) => {
    //     if (reason === "reset") {            
    //         if (selectFieldFrom) {
    //             addressTo.splice(indexFrom, 0, selectFieldFrom);
    //         }
    //         selectFieldFrom = value;
    //         if (selectFieldTo) setCompleteDoubleAddress(true);
    //         if (selectFieldFrom) {
    //             indexFrom = addressTo.indexOf(selectFieldFrom)
    //             addressTo.splice(indexFrom, 1);
    //         }
    //     }
    //     if (reason === "clear") {
    //         addressTo.splice(indexFrom, 0, selectFieldFrom);
    //         selectFieldFrom = value;
    //         setCompleteDoubleAddress(false);
    //     }
    // }

    // const handleChangeTo = (event, value, reason) => {
    //     if (reason === "reset") {
    //         if (selectFieldTo) {
    //             addressFrom.splice(indexTo, 0, selectFieldTo);
    //         }
    //         selectFieldTo = value;
    //         if (selectFieldFrom) setCompleteDoubleAddress(true);
    //         if (selectFieldTo) {
    //             indexTo = addressFrom.indexOf(selectFieldTo);
    //             addressFrom.splice(indexTo, 1);
    //         }
    //     }
    //     if (reason === "clear") {
    //         addressFrom.splice(indexTo, 0, selectFieldTo);
    //         selectFieldTo = value;
    //         setCompleteDoubleAddress(false);
    //     }
    // }

    // const [addressFrom, setAddressFrom] = useState(addresses.slice());
    // const [addressTo, setAddressTo] = useState(addresses.slice());

    // const something = useCallback(() => {

    //     let arr = addresses.slice();
    //     if (selectFieldTo !=="") {
    //         let indexTo = arr.indexOf(selectFieldTo);
    //         arr.splice(indexTo, 1);
    //     }
    //     addressFrom = arr;
    //     return arr;
    //   }, [selectFieldTo, addresses]);

    // const addressTo = useCallback(() => {

    //     let arr = addresses.slice();
    //     if (selectFieldFrom !=="") {
    //         let indexFrom = arr.indexOf(selectFieldFrom);
    //         arr.splice(indexFrom, 1);
    //     }
    //     return arr;
    // }, [selectFieldFrom, addresses]);


    // useEffect(() => {
    //     let addressTo = addresses.slice();
    //     if (selectFieldFrom !== "") {
    //         let indexFrom = addressTo.indexOf(selectFieldFrom);
    //         addressTo.splice(indexFrom, 1);
    //     }
    // }, [addresses, selectFieldFrom/* , addressTo */]);

    // useEffect(() => {
    //     let addressFrom = addresses.slice();
    //     if (selectFieldTo !== "") {
    //         let indexTo = addressFrom.indexOf(selectFieldTo);
    //         addressFrom.splice(indexTo, 1);
    //     }
    // }, [addresses, selectFieldTo/* , addressFrom */]);

    // }, [selectFieldFrom/* , addresses, addressTo */] );

    



    // const changeAddressFrom = useCallback(
    //     () => {
    //         setAddressFrom(addresses.slice());
    //         if (selectFieldTo !== "") {
    //             let indexTo = addressFrom.indexOf(selectFieldTo);
    //             setAddressFrom(addressFrom.splice(indexTo, 1));

    //         }
    //     },
    //     [selectFieldTo],
    // );

    // const changeAddressTo = useCallback(
    //     () => {
    //         setAddressTo(addresses.slice());
    //         if (selectFieldFrom !== "") {
    //             let indexFrom = addressTo.indexOf(selectFieldFrom);
    //             setAddressTo(addressTo.splice(indexFrom, 1));

    //         }
    //     },
    //     [selectFieldFrom],
    // );



    // const [completeDoubleAddress, setCompleteDoubleAddress] = useState(false);

    

    // const handleChangeFrom = (event, value, reason) => {
    //     if (reason === "reset") {
    //         console.log("completeDoubleAddress=", completeDoubleAddress);
            
    //         if (selectFieldFrom) {
    //             addressTo.splice(indexFrom, 0, selectFieldFrom);
    //         }
    //         setSelectFieldFrom(value);
    //         // selectFieldFrom = value;
    //         if (selectFieldTo) setCompleteDoubleAddress(true);
    //         if (selectFieldFrom) {
    //             indexFrom = addressTo.indexOf(selectFieldFrom)
    //             addressTo.splice(indexFrom, 1);
    //         }
    //         // console.log("selectFieldFrom=", selectFieldFrom);
    //         // console.log("addressToAfterSplice=", addressTo);
    //         console.log("completeDoubleAddress=", completeDoubleAddress);
    //     }
    //     if (reason === "clear") {
    //         console.log("completeDoubleAddress=", completeDoubleAddress);
    //         addressTo.splice(indexFrom, 0, selectFieldFrom);
    //         setSelectFieldFrom(value);
    //         // selectFieldFrom = value;
    //         console.log("completeDoubleAddress=", completeDoubleAddress);
    //         setCompleteDoubleAddress(false);

    //         // console.log("selectFieldFromClear=", selectFieldFrom);
    //         // console.log("addressToAfterClear=", addressTo);
    //     }
    // }

    // const handleChangeTo = (event, value, reason) => {
    //     if (reason === "reset") {
    //         console.log("completeDoubleAddress=", completeDoubleAddress);
    //         if (selectFieldTo) {
    //             addressFrom.splice(indexTo, 0, selectFieldTo);
    //         }
    //         setSelectFieldTo(value);
    //         // selectFieldTo = value;
    //         if (selectFieldFrom) setCompleteDoubleAddress(true);
    //         if (selectFieldTo) {
    //             indexTo = addressFrom.indexOf(selectFieldTo);
    //             addressFrom.splice(indexTo, 1);
    //         }
    //         // console.log("selectFieldTo=", selectFieldTo);
    //         // console.log("addressFromAfterSplice=", addressFrom);
    //         console.log("completeDoubleAddress=", completeDoubleAddress);
    //     }
    //     if (reason === "clear") {
    //         console.log("completeDoubleAddress=", completeDoubleAddress);
    //         addressFrom.splice(indexTo, 0, selectFieldTo);
    //         setSelectFieldTo(value);
    //         // selectFieldTo = value;
    //         setCompleteDoubleAddress(false);
    //         console.log("completeDoubleAddress=", completeDoubleAddress);

    //         // console.log("selectFieldToClear=", selectFieldTo);
    //         // console.log("addressFromAfterClear=", addressFrom);
    //     }
    // }

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
        // нужно менять параметр statusOrder отправляя action в reducer.
    }


    return (
        <>
        { (!cardStatus) &&
            <>
                <Paper style={classes.formBlock } rounded = "true" >
                    <Typography className={classes.subText} align="left" variant="h4" component="h2">Заполните платежные данные</Typography>
                    <Typography className={classes.subText} align="left">Укажите информацию о банковской карте, чтобы сделать заказ.</Typography>
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

        { (cardStatus) &&
            <>
                <Paper style={classes.formOrder } rounded = "true" >
                    <Autocomplete
                    id="combo-box-demo-from"
                    onInputChange={handleChangeFrom}
                    options={addressFrom}
                    getOptionLabel={option => option}
                    style={{ marginBottom: "40px" }}
                    renderInput={params => (
                        <TextField {...params} label="Откуда" fullWidth />
                    )}
                    />
                    <Autocomplete
                    id="combo-box-demo-to"
                    onInputChange={handleChangeTo}
                    options={addressTo}
                    getOptionLabel={option => option}
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

{ (!cardStatus) &&
            <>
                <Paper style={classes.formOrder } rounded = "true" >
                    <Typography className={classes.subText} align="left" variant="h4" component="h2">Заказ размещён</Typography>
                    <Typography className={classes.subText} align="left">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</Typography>
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