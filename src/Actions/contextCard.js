const CONTEXT_CARD = "CONTEXT_CARD";

const contextCard = bool => {
    return {
        type: CONTEXT_CARD,
        payload: bool
    }
};

export default contextCard;