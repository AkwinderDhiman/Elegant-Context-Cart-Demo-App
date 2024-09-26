import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../Store/Shopping-cart-context.jsx";

export default function Cart() {
  const cartCTX = useContext(CartContext);

  const { onUpdateCart } = useContext(CartContext);

  const totalPrice = cartCTX.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  return (
    <div id="cart">
      {cartCTX.items.length === 0 && <p>No items in cart!</p>}
      {cartCTX.items.length > 0 && (
        <ul id="cart-items">
          {cartCTX.items.map((item) => {
            console.log(name);

            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateCart(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateCart(item.id, 1)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
