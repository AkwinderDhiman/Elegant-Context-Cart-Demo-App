import "./CartModal.css";
import { forwardRef, useRef, useImperativeHandle } from "react";
import Cart from "../Cart/Cart";

const CartModal = forwardRef(function CartModal(
  { cartProduct, title, actions },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart cartItems={cartProduct} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>
  );
});

export default CartModal;
