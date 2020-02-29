let initialState = false;

export default function contextCard (state = initialState, action) {
    switch (action.type) {
    case "CONTEXT_CARD":
        return action.payload;
    default:
        return state;
    }
  }