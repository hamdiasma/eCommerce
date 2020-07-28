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
  return [...cartItems,{...cartitemToAdd,quantity : 1}]
};
