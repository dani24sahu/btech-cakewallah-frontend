import React, { useEffect } from "react";
import cake1 from "../../assets/chocolate.png";
import cake2 from "../../assets/icecream.png";
import cake3 from "../../assets/strawberry.png";
import "../../styles/cart.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const {
    cartItems: {
      chocolateCake: { quantity: chocolateCake },
      iceCreamCake: { quantity: iceCreamCake },
      strawberryCake: { quantity: strawberryCake },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "chocolateCakeIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      case 2:
        dispatch({ type: "iceCreamCakeIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      case 3:
        dispatch({ type: "strawberryCakeIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "chocolateCakeIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };
  const decrement = (item) => {
    switch (item) {
      case 1:
        if (chocolateCake === 0) return;
        dispatch({ type: "chocolateCakeDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      case 2:
        if (iceCreamCake === 0) return;
        dispatch({ type: "iceCreamCakeDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      case 3:
        if (strawberryCake === 0) return;
        dispatch({ type: "strawberryCakeDecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if (chocolateCake === 0) return;
        dispatch({ type: "chocolateCakeDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        subTotal,
        tax,
        shippingCharges,
        total,
      })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <>
      <section className="cart">
        <main>
          <CartItem
            title={"Choolate Cake"}
            img={cake1}
            value={chocolateCake}
            increment={() => increment(1)}
            decrement={() => decrement(1)}
          />
          <CartItem
            title={"Icecreame Cake"}
            img={cake2}
            value={iceCreamCake}
            increment={() => increment(2)}
            decrement={() => decrement(2)}
          />
          <CartItem
            title={"Strawberry Cake"}
            img={cake3}
            value={strawberryCake}
            increment={() => increment(3)}
            decrement={() => decrement(3)}
          />

          <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹{subTotal}</p>
            </div>
            <div>
              <h4>Tax</h4>
              <p>₹{tax}</p>
            </div>
            <div>
              <h4>Shipping Charges</h4>
              <p>₹{shippingCharges}</p>
            </div>
            <div>
              <h4>Total</h4>
              <p>₹{total}</p>
            </div>
            <Link to="/shipping">Checkout</Link>
          </article>
        </main>
      </section>
    </>
  );
};

export default Cart;
