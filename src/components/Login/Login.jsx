import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import "../../styles/login.scss";
import { server } from "../../redux/store";

const Login = () => {
  const loginHandler = () => {
    window.open(`${server}/googlelogin`, "_self");
  };
  return (
    <section className="login">
      <motion.button
        onClick={loginHandler}
        initial={{
          y: "-100vh",
        }}
        animate={{
          y: 0,
        }}
      >
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
