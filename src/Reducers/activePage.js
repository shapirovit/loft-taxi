let initialState = {};

export default function activePage (state = initialState, action) {
    switch (action.type) {
    case "ACTIVE_PAGE":
        return action.payload;
    default:
        return state;
    }
  }