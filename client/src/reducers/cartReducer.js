export const cartInitialState = {
  items: [],
  isOpen: false,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART_DATA":
      return {
        ...state,
        items: action.payload.items,
      };

    case "ADD_TO_CART": {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case "UPDATE_CART_ITEM": {
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    }

    case "DELETE_CART_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    }

    case "TOGGLE_CART": {
      return { ...state, isOpen: !state.isOpen };
    }

    default:
      return state;
  }
};
