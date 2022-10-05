const cartItems = [];

export const cartReducer = (state = cartItems, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_CART':
      const exist = state.find((el) => el.id === payload.id);
      if (exist) {
        return state.map((x) => (x.id === payload.id ? { ...x, qty: ++x.qty, subtotal: x.price * x.qty } : x));
      } else {
        return [...state, { ...payload, qty: 1, subtotal: payload.price }];
      }

    case 'REMOVE_FROM_CART':
      const exist1 = state.find((el) => el.id === payload.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) => (x.id === payload.id ? { ...x, qty: --x.qty, subtotal: x.price * x.qty } : x));
      }

    default:
      return state;
  }
};
