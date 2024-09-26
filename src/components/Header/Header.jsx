import { useRef } from "react";
import CartModal from "../CartModal/CartModal";
import './Header.css';

export default function Header({ cart }) {
  const modal = useRef();
  const cartQuantity = cart?.items?.length;
  console.log(cart);

  function HandleOpenCartModal() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button id="checkout">Checkout</button>
      </>
    );
  }
  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
        cartProduct={cart}
      />

      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={HandleOpenCartModal}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
