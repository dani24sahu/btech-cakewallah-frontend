import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "../../styles/contact.scss";
import cake from "../../assets/redvalvet.png";
import { contactUs } from "../../redux/action/user";
import { toast } from "react-hot-toast";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { error, message: stateMessage } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, stateMessage]);

  return (
    <>
      <section className="contact">
        <motion.form
          onSubmit={submitHandler}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 0.2 }}
        >
          <h2>Contact Us</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols={30}
            rows={10}
          ></textarea>
          <button type="submit">Send</button>
        </motion.form>

        <motion.div
          className="formBorder"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ x: "50%", y: "-100vh", opacity: 0 }}
            animate={{ x: "60%", y: "-110%", opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <img src={cake} alt="redvelvet" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
