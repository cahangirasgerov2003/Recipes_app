const mainColorReducer = (state, action) => {
  switch (action.type) {
    case "SETCOLOR":
      return { ...state, color: action.value };
    case "SETMODECOLOR":
      return { ...state, mode: action.value };
    default:
      return state;
  }
};

export default mainColorReducer;
