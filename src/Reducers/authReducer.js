const initialState = {
  showAuth: true,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLEAUTH":
      if (state.showAuth) {
        return {
          ...state,
          showAuth: false,
        };
      } else {
        return {
          ...state,
          showAuth: true,
        };
      }

    case "FORCEAUTH":
      return {
        ...state,
        showAuth: true,
      };
    default:
      return;
  }
}
