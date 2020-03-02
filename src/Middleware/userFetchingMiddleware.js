import fetchUserSuccess from "../Actions/fetchUserSuccess";
import fetchUserFailure from "../Actions/fetchUserFailure";
import contextLogin from "../Actions";

const userFetchingMiddleware = store => next => action => {
    const result = next(action);
    console.log("userFetchingMiddleware is starting");
    
   
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
                    store.dispatch(contextLogin(true));
                }
            })
            .catch(error => {
                store.dispatch(fetchUserFailure(error))
            })
    }
    return result;
}

export default userFetchingMiddleware;