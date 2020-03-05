const STATUS_LOGIN = "STATUS_LOGIN";

const statusLogin = obj => {
    return {
        type: STATUS_LOGIN,
        payload: obj
    }
};

export default statusLogin;