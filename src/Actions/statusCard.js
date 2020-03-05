const STATUS_CARD = "STATUS_CARD";

const statusCard = obj => {
    return {
        type: STATUS_CARD,
        payload: obj
    }
};

export default statusCard;