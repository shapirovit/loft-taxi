import { fetchCardSuccess } from "../Actions/fetchCard";
import { fetchCardFailure } from "../Actions/fetchCard";
import statusCard from "../Actions/statusCard";

const cardFetchingMiddleware = store => next => action => {
    const resultNext = next(action);
    console.log("cardFetchingMiddleware is starting");
    
   
    if (action.type === "FETCH_CARD_REQUEST") {

        fetch('https://loft-taxi.glitch.me/card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(action.payload)
        })
            .then(response => response.json())
            .then(result => {
                console.log("resultCard===", result);
                store.dispatch(fetchCardSuccess(result));
                if (result.success === true) {
                    store.dispatch(statusCard({status: result.success}));
                }
            })
            .catch(error => {
                store.dispatch(fetchCardFailure(error))
            })
    }
    return resultNext;
}

export default cardFetchingMiddleware;