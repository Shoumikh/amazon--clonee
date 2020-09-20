export const initialState = {
  basket: [],
};

//selector
export const TotalPrice = (basket) =>
  basket?.reduce((sum, inBasket) => sum + inBasket.price, 0);

//takes a state and a action (add to datalayer or get from datalayer)
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //setting up unique id
      state.basket.map((basketItem) => {
        if (basketItem.id === action.item.id) {
          action.item.id = action.item.id + 1;
        }
      });
      return {
        ...state, //whatever the state originally was
        basket: [...state.basket, action.item], //..state.basket >> whatever basket currently was and whatever we decided to add
      };
    case "REMOVE_FROM_BASKET":
      //find the index of the first item with same action id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); //will cut the index by 1
      } else {
        console.warn(
          `cannot remove item from the basket with id : ${action.id} as item is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
