
import { createSelector } from 'reselect';

const selectCartState = (state) => state.cart;

export const selectProducts = createSelector(
  [selectCartState],
  (cartState) => cartState.products
);

export const selectCartItems = createSelector(
  [selectCartState],
  (cartState) => cartState.cart
);

export const calculateTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
