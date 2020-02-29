export const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.contextLogin
    }
  }

export const mapDispatchToProps = (dispatch) => {
    return {
        addContextLogin: (bool) => {
        dispatch(contextLogin(bool))
        }
    }
}


const CONTEXT_LOGIN = "CONTEXT_LOGIN";

const contextLogin = bool => {
    return {
        type: CONTEXT_LOGIN,
        payload: bool
    }
};

export default contextLogin;