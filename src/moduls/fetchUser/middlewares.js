import { fetchUserSuccess } from "./actions";
import { fetchUserFailure } from "./actions";
import { statusLogin } from "../statusLogin";

export const userFetchingMiddleware = store => next => action => {
    const resultNext = next(action);
    console.log("userFetchingMiddleware is starting");
    console.log("store.getState()=", store.getState());    
   
    if (action.type === "FETCH_USER_REQUEST") {
            fetch('https://loft-taxi.glitch.me/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(action.payload)
            })
                .then(response => response.json())
                .then(result => {
                    console.log("result===", result);
                    store.dispatch(fetchUserSuccess(result));
                    if (result.success === true) {
                        store.dispatch(statusLogin({status: true, token: result.token}));
                        localStorage["statusLogin"] = JSON.stringify({ status: true, token: result.token });
                    }
                })
                .catch(error => {
                    store.dispatch(fetchUserFailure(error))
                })
    }
    return resultNext;
}

export const userFetchingRegistrMiddleware = store => next => action => {
    const resultNext = next(action);
    console.log("userFetchingRegistrMiddleware is starting");    
   
    if (action.type === "FETCH_USER_REQUEST_REGISTR") {

        fetch('https://loft-taxi.glitch.me/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(action.payload)
        })
            .then(response => response.json())
            .then(result => {
                console.log("resultRegistr===", result);
                store.dispatch(fetchUserSuccess(result));
                if (result.success === true) {
                    store.dispatch(statusLogin({status: true, token: result.token}));
                    localStorage["statusLogin"] = JSON.stringify({ status: true, token: result.token });
                }
            })
            .catch(error => {
                store.dispatch(fetchUserFailure(error))
            })
    }
    return resultNext;
}