import fetchUserSuccess from "../Actions/fetchUserSuccess";
import fetchUserFailure from "../Actions/fetchUserFailure";
import statusLogin from "../Actions";

const userFetchingRegistrMiddleware = store => next => action => {
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
                }
            })
            .catch(error => {
                store.dispatch(fetchUserFailure(error))
            })
    }
    return resultNext;
}

export default userFetchingRegistrMiddleware;