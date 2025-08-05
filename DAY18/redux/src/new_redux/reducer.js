import { ADD_TO_CART, REMOVE_FROM_CART } from "./action";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const updatedCart = state.cart.map((item, index) =>
          index === itemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_FROM_CART: {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const item = state.cart[itemIndex];
        if (item.quantity > 1) {
          // Decrease quantity by 1
          const updatedCart = state.cart.map((item, index) =>
            index === itemIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          return { ...state, cart: updatedCart };
        } else {
          // Remove item completely if quantity = 1
          const filteredCart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
          return { ...state, cart: filteredCart };
        }
      }
      return state;
    }

    default:
      return state;
  }
};

export default cartReducer;
