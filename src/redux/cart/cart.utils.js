export const adItemToCart = (cartItems, cartitemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartitem) => cartitem.id === cartitemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartitem) =>
      cartitem.id === cartitemToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }
  return [...cartItems, { ...cartitemToAdd, quantity: 1 }];
};

export const decreaseItem = (cartItems, cartItemToremove) => {
  const existingCartItem = cartItems.find(
    (cartitem) => cartitem.id === cartItemToremove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToremove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
