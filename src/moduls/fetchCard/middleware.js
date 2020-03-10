import { fetchCardSuccess } from "./actions";
import { fetchCardFailure } from "./actions";
import { statusCard } from "../statusCard";

export const cardFetchingMiddleware = store => next => action => {
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
                    store.dispatch(statusCard({ ...action.payload, status: result.success}));
                    localStorage["statusCard"] = JSON.stringify({ ...action.payload, status: result.success});
                }
            })
            .catch(error => {
                store.dispatch(fetchCardFailure(error))
            })
    }
    return resultNext;
}