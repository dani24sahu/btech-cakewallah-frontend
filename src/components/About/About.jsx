import React from "react";
import "../../styles/about.scss";
import { Link } from "react-router-dom";
import {RiFindReplaceFill} from 'react-icons/ri'
import me from "../../assets/founder2.png"

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>BTech Cake Wallah</h4>
          <p>Engineering delicious cakes for every occasion.</p>
          <p>Explore various type of cakes. Click below to see the Menu</p>
          <Link to='/' >
            <RiFindReplaceFill />
          </Link>
        </article>

        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt="Founder" />
                    <h3>Dani Ram Sahu</h3>
                </div>

                <p>
                    I am Dani Ram Sahu, the founder of BTech Cake Wallah. Affiliated to God Taste...
                </p>
            </article>
        </div>
      </main>
    </section>
  );
};

export default About;
