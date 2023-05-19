import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder2.png";

const Founder = () => {
    const options = {
        initial: {
            x:"-100%",
            opacity: 0,
        },
        whileInView: {
            x:"0",
            opacity: 1,
        }
    }
  return (
    <>
      <section className="founder">
        <motion.div {...options}>
          <img src={me} alt="Founder" height={200} width={200} />
          <h3>Dani Ram Sahu</h3>
          <p>
            Hello, I'm Dani Ram Sahu, the founder of BTech Cake Wallah.
            <br />
            Our aim is to apply best technologies to provied you best taste.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Founder;
