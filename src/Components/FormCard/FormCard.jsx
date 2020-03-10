import React from 'react';
import './FormCard.css';
import { MCIcon } from 'loft-taxi-mui-theme';
import { Paper, Grid, Typography, Card, Button, TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { fetchCardRequest } from "../../moduls/fetchCard";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { statusCard } from "../../moduls/statusCard";
import { fetchCardOut } from "../../moduls/fetchCard";
import { getStatusCardStatus, getToken, getCardIsFetching, getFetchCardError } from '../../moduls/fetchCard';

const mapStateToProps = (state) => {
    return {
        cardStatus: getStatusCardStatus(state),
        token: getToken(state),
        isFetching: getCardIsFetching(state),
        error: getFetchCardError(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        addFetchCard: (card) => {
            dispatch(fetchCardRequest(card))
        },
        addStatusCard: (obj) => {
            dispatch(statusCard(obj))
        },
        fetchOutStatusCard: () => {
            dispatch(fetchCardOut())
        },
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        margin: "48px 0px",
        padding: "44px 60px",
        width: "632px",
        height: "369px",
        display: "flex",
        flexDirection: "column"
    },
    rootShort: {
        margin: "48px 0px 0px 0px",
        padding: "44px 60px",
        width: "420px",
        height: "650px",  /* "680px", */
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box"
    },
    rootSuccess: {
        margin: "48px 0px",
        padding: "44px 60px",
        width: "500px",
        height: "220px",
        display: "flex",
        flexDirection: "column"
    },
    rootSuccessShort: {
        margin: "48px 0px",
        padding: "44px 60px",
        width: "420px",
        height: "360px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box"
    },
    subText: {
        marginBottom: "40px"
    },
    cardLeft: {
        width: "300px",
        height: "189px",
        padding: "16px 32px",
        boxSizing: "border-box",
        position: "relative"
    },
    cardRight: {
        width: "300px",
        height: "189px",
        padding: "16px 32px",
        boxSizing: "border-box"
    },
    inputTop: {
        width: "100%",
        marginBottom: "30px"
    },
    inputBottom: {
        width: "100%"
    },
  }));



const FormCard = (props) => {

    const { addStatusCard, fetchOutStatusCard, handleClick, error, isFetching, cardStatus, addFetchCard, token } = props;

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:700px)');

    const [values, setValues] = React.useState({
        cardNumber: '',
        expiryDate: '',
        cardName: '',
        cvc: '',
        showCvc: false,
    });
    
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowCvc = () => {
         setValues({ ...values, showCvc: !values.showCvc });
    };

    const handleMouseDownCvc = event => {
        event.preventDefault();
    };

    const handleClickMap = event => {
        event.preventDefault();
        handleClick('map');
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!cardStatus) {
            let card = {...values, token: token};
            delete card.showCvc;
            addFetchCard(card);
            setValues({
                cardNumber: '',
                expiryDate: '',
                cardName: '',
                cvc: '',
                showCvc: false
            });
        } else {
            addStatusCard({status: false});
            fetchOutStatusCard();
        }
    }

    return (
        <Paper className={ cardStatus ? ( matches ? classes.rootSuccess : classes.rootSuccessShort ) : (matches ? classes.root : classes.rootShort) } rounded="true" >
            <Typography align="center" variant="h4" component="h2">Профиль</Typography>
            <Typography className={classes.subText} align="center">Способ оплаты</Typography>

            { (cardStatus === true) && 
                <>
                    <div align="center">Данные карты успешно сохранены!</div>
                    <div align="center" onClick={handleClickMap}>
                        <Link to="/map">Перейти к выбору маршрута</Link>
                    </div>
                </>
            }

            <form onSubmit={handleSubmit} >
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container direction={ matches ? "row" : "column"} justify="center" spacing={4}>
                            
                            { (cardStatus === false) &&
                            <>
                            <Grid item xs={12} sm={6}>
                                <Card elevation={3} className={classes.cardLeft}>
                                    <MCIcon />
                                        <TextField
                                            className={classes.inputTop}
                                            id="standard-textarea-card"
                                            label="Номер карты"
                                            placeholder="0000 0000 0000 0000"
                                            required
                                            name="cardNumber"
                                            type="text"
                                            value={values.cardNumber}
                                            onChange={handleChange('cardNumber')}
                                        />
                                        <TextField
                                            className={classes.inputBottom}
                                            id="standard-textarea-date"
                                            label="Срок действия"
                                            placeholder="05/25"
                                            required
                                            name="expiryDate"
                                            type="text"
                                            value={values.expiryDate}
                                            onChange={handleChange('expiryDate')}
                                        />
                                </Card>                                            
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Card elevation={3} className={classes.cardRight}>
                                    <TextField
                                        className={classes.inputTop}
                                        id="standard-textarea-name"
                                        label="Имя владельца"
                                        placeholder="USER NAME"
                                        required
                                        name="cardName"
                                        value={values.cardName}
                                        onChange={handleChange('cardName')}
                                    />
                                    <TextField
                                        className={classes.inputBottom}
                                        id="standard-textarea-cvc"
                                        label="CVC"
                                        placeholder="CVC"
                                        required
                                        name="cvc"
                                        type={values.showCvc ? 'text' : 'password'}
                                        value={values.cvc}
                                        onChange={handleChange('cvc')}
                                        InputProps={{
                                            endAdornment:
                                                <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowCvc}
                                                    onMouseDown={handleMouseDownCvc}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                                </InputAdornment>
                                        }}
                                    />
                                </Card>
                            </Grid>
                            </>
                            }
                        </Grid>
                    </Grid>                  
                </Grid>                
                <div className="form-card-button">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        { cardStatus ? "Изменить платежные данные" : "Сохранить" }
                    </Button>
                </div>
                {isFetching && <p align="center" >Сохраняем данные...</p>}
                { (error != null) && <div>
                                         <p>Ошибка при загрузке данных:</p>
                                         <p>{error}</p>
                                     </div>
                }
            </form>
        </Paper>
    )
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
  )( FormCard )