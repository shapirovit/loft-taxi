const ADD_CARD = "ADD_CARD";

const addCard = card => {
    return {
        type: ADD_CARD,
        payload: card
    }
};

export default addCard;