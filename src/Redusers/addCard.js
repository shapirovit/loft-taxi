let initialState = {};

export default function addCard (state = initialState, action) {
    switch (action.type) {
    case "ADD_CARD":
        return action.payload;
    default:
        return state;
    }
  }