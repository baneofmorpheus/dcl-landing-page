const Reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
