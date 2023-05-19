import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : {
        chocolateCake: {
          quantity: 0,
          price: 600,
        },

        iceCreamCake: {
          quantity: 0,
          price: 900,
        },

        strawberryCake: {
          quantity: 0,
          price: 1000,
        },
      },

  subTotal: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).subTotal
    : 0,
  tax: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).tax
    : 0,
  shippingCharges: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges
    : 0,
  total: localStorage.getItem("cartPrices")
    ? JSON.parse(localStorage.getItem("cartPrices")).total
    : 0,
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  chocolateCakeIncrement: (state) => {
    state.cartItems.chocolateCake.quantity += 1;
  },

  iceCreamCakeIncrement: (state) => {
    state.cartItems.iceCreamCake.quantity += 1;
  },

  strawberryCakeIncrement: (state) => {
    state.cartItems.strawberryCake.quantity += 1;
  },

  chocolateCakeDecrement: (state) => {
    state.cartItems.chocolateCake.quantity -= 1;
  },

  iceCreamCakeDecrement: (state) => {
    state.cartItems.iceCreamCake.quantity -= 1;
  },

  strawberryCakeDecrement: (state) => {
    state.cartItems.strawberryCake.quantity -= 1;
  },

  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.chocolateCake.price *
        state.cartItems.chocolateCake.quantity +
      state.cartItems.iceCreamCake.price *
        state.cartItems.iceCreamCake.quantity +
      state.cartItems.strawberryCake.price *
        state.cartItems.strawberryCake.quantity;

    state.tax = state.subTotal * 0.18;

    state.shippingCharges = state.subTotal > 1000 ? 2000 : 0;

    state.total = state.subTotal + state.tax + state.shippingCharges;
  },

  emptyState: (state) => {
    state.cartItems = {
      chocolateCake: {
        quantity: 0,
        price: 600,
      },
      iceCreamCake: {
        quantity: 0,
        price: 900,
      },
      strawberryCake: {
        quantity: 0,
        price: 1000,
      },
    };

    state.subTotal = 0;
    state.shippingCharges = 0;
    state.tax = 0;
    state.total = 0;
  },

  addShippingInfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      city: action.payload.city,
      country: action.payload.country,
      state: action.payload.state,
      phoneNo: action.payload.phoneNo,
      pinCode: action.payload.pinCode,
    };
  },
});

