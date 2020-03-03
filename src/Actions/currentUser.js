// export const mapStateToProps = (state) => {
//     return {
//         currentUser: state.currentUser
//     }
//   }

// export const mapDispatchToProps = (dispatch) => {
//     return {
//         addCurrentUser: (user) => {
//         dispatch(currentUser(user))
//         }
//     }
// }


const CURRENT_USER = "CURRENT_USER";

const currentUser = user => {
    return {
        type: CURRENT_USER,
        payload: user
    }
};

export default currentUser;