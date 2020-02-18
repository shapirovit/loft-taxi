import React from 'react';
import './Profile.css';
import { MCIcon } from 'loft-taxi-mui-theme';
import { Paper, Grid, Typography, Card, Button, TextField, /* FormControl, InputLabel, Input, */ InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Autocomplete from '@material-ui/lab/Autocomplete';

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
        margin: "48px 0px",
        padding: "44px 60px",
        width: "420px",
        height: "680px",
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



const Profile = (props) => {

    const classes = useStyles();
    const matches = useMediaQuery('(min-width:700px)');

    const [values, setValues] = React.useState({
        card: '',
        date: '',
        userName: '',
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

    const handleSubmit = event => {
        event.preventDefault();
        setValues({
            card: '',
            date: '',
            userName: '',
            cvc: '',
            showCvc: false
        });
    }

    return (
        <div className="profile-page">
            <Paper className={ matches ? classes.root : classes.rootShort } rounded>
                <Typography align="center" variant="h4" component="h2">Профиль</Typography>
                <Typography className={classes.subText} align="center">Способ оплаты</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container justify="center">
                        <Grid item xs={12}>
                            <Grid container direction={ matches ? "row" : "column"} justify="center" spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <Card elevation={3} className={classes.cardLeft}>
                                        <MCIcon />
                                            <TextField
                                                className={classes.inputTop}
                                                id="standard-textarea"
                                                label="Номер карты"
                                                placeholder="0000 0000 0000 0000"
                                                required
                                                name="card"
                                                type="text"
                                                minlength="16"
                                                maxlength="16"
                                                value={values.card}
                                                onChange={handleChange('card')}
                                            />
                                            <TextField
                                                className={classes.inputBottom}
                                                id="standard-textarea"
                                                label="Срок действия"
                                                placeholder="05/25"
                                                required
                                                name="date"
                                                type="text"
                                                value={values.date}
                                                onChange={handleChange('date')}
                                            />
                                    </Card>                                            
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card elevation={3} className={classes.cardRight}>
                                        <TextField
                                            className={classes.inputTop}
                                            id="standard-textarea"
                                            label="Имя владельца"
                                            placeholder="USER NAME"
                                            required
                                            name="userName"
                                            value={values.userName}
                                            onChange={handleChange('userName')}
                                        />
                                        <TextField
                                            className={classes.inputBottom}
                                            id="standard-textarea"
                                            label="CVC"
                                            placeholder="CVC"
                                            required
                                            name="cvc"
                                            type={values.showCvc ? 'text' : 'password'}
                                            maxlength={3}
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
                            </Grid>
                        </Grid>                  
                    </Grid>
                    <div className="profile-page-form-button">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                        >
                            Сохранить
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}

export default Profile;