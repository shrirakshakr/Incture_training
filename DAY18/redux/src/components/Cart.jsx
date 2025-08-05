import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  // Calculate total price by summing price * quantity for each item
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart Page :</h2>
      {cartItems.length === 0 && <p>Cart is Empty</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} : $ {item.price*item.quantity} === Quantity : {item.quantity}
          </li>
        ))}
      </ul>

      {/* Show total price only if cart is not empty */}
      {cartItems.length > 0 && (
        <h3>Total Price: $ {totalPrice}</h3>
      )}
    </div>
  );
}

export default Cart;
