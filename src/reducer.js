export const initialState = {
  basket: [],
};

//takes a state and a action (add to datalayer or get from datalayer)
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, //whatever the state originally was
        basket: [...state.basket, action.item], //..state.basket >> whatever basket currently was and whatever we decided to add
      };
    default:
      return state;
  }
};

export default reducer;
