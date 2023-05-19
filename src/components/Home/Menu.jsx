import React from "react";
import MenuCard from "./MenuCard";
// import "../../styles/menu.scss";
import cake1 from "../../assets/chocolate.png";
import cake2 from "../../assets/icecream.png";
import cake3 from "../../assets/strawberry.png";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "chocolateCakeIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
        break;

      case 2:
        dispatch({ type: "iceCreamCakeIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
        break;

      case 3:
        dispatch({ type: "strawberryCakeIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
        break;

      default:
        dispatch({ type: "chocolateCakeIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
        break;
    }
  };
  return (
    <>
      <section id="menu">
        <h1>MENU</h1>
        <div>
          <MenuCard
            itemNum={1}
            cakeSrc={cake1}
            price={600}
            title="Chocolate Cake"
            handler={addToCartHandler}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            cakeSrc={cake2}
            price={900}
            title="Ice-cream Cake"
            handler={addToCartHandler}
            delay={0.5}
          />
          <MenuCard
            itemNum={3}
            cakeSrc={cake3}
            price={1000}
            title="Strawberry Cake"
            handler={addToCartHandler}
            delay={0.8}
          />
        </div>
      </section>
    </>
  );
};

export default Menu;

