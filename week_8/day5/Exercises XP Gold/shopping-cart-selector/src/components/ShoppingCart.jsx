
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { selectProducts, selectCartItems, calculateTotalPrice } from '../features/cart/cartSelectors';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(calculateTotalPrice);

  const handleAddToCart = useCallback((product) => {
    dispatch(addToCart(product));
  }, [dispatch]);

  return (
    <div>
      <h2>🛍️ Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>🛒 Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>

      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;
