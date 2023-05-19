import React, { useEffect } from "react";
import "../../styles/orderDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../redux/action/order";
import { useParams } from "react-router-dom";
import Loader from "../Layout/Loader";

const OrderDetails = () => {
  const params = useParams();

  const { order, loading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <section className="orderDetails">
      {loading === false && order !== undefined ? (
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <strong>Address</strong>
              {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pinCode} `}
            </p>
          </div>

          <div>
            <h1>Contact</h1>
            <p>
              <strong>Name</strong>
              {order.user.name}
            </p>
            <p>
              <strong>Phone No</strong>
              {order.shippingInfo.phoneNo}
            </p>
          </div>

          <div>
            <h1>Status</h1>
            <p>
              <strong>Order Status</strong>
              {order.orderStatus}
            </p>
            <p>
              <strong>Placed At</strong>
              {order.createdAt.split("T")[0]}
            </p>
            <p>
              <strong>Delivered At</strong>
              {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}
            </p>
          </div>

          <div>
            <h1>Payment</h1>
            <p>
              <strong>Payment Method</strong>
              {order.paymentMethod}
            </p>
            <p>
              <strong>Payment Reference</strong>
              {order.paymentMethod === "Online"
                ? `#${order.paymentInfo}`
                : "NA"}
            </p>
            <p>
              <strong>Paid At</strong>
              {order.paymentMethod === "Online"
                ? `${order.paidAt.split("T")[0]}`
                : "NA"}
            </p>
          </div>

          <div>
            <h1>Amount</h1>
            <p>
              <strong>Items Total</strong>₹{order.itemsPrice}
            </p>
            <p>
              <strong>Shipping Charges</strong>₹{order.shippingCharges}
            </p>
            <p>
              <strong>Tax Charges</strong>₹{order.taxPrice}
            </p>
            <p>
              <strong>Total Amount</strong>₹{order.totalAmount}
            </p>
          </div>

          <article>
            <h1>Ordered Items</h1>

            <div>
              <h4>Chocolate Cake</h4>
              <div>
                <span>{order.orderItems.chocolateCake.quantity}</span> x{" "}
                <span>{order.orderItems.chocolateCake.price}</span>
              </div>
            </div>

            <div>
              <h4>Strawberry Cake</h4>
              <div>
                <span>{order.orderItems.strawberryCake.quantity}</span> x{" "}
                <span>{order.orderItems.strawberryCake.price}</span>
              </div>
            </div>

            <div>
              <h4>Ice-Cream Cake</h4>
              <div>
                <span>{order.orderItems.iceCreamCake.quantity}</span> x{" "}
                <span>{order.orderItems.iceCreamCake.price}</span>
              </div>
            </div>

            <div>
              <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
              <div style={{ fontWeight: 800 }}>₹{order.itemsPrice}</div>
            </div>
          </article>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default OrderDetails;
