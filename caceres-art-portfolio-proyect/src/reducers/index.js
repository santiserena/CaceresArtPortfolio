// reducer:
const initialState = {
  deviceTypeSt: 'desktop',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DEVICE_TYPE":
      return {
        ...state,
        deviceTypeSt: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
