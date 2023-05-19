import React from 'react'
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import "../../styles/footer.scss"

const Footer = () => {
  return (
    <>
        <footer>
        <div>
            <h2>BTech Cake Wallah</h2>
            <p>Engineering delicious cakes for every occasion.</p>
            <br />
            <em>We give attention to genuine feedback.</em>

            <strong>All rights received @btechcakewallah</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://linkedin.com/in/dani24" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
            <a href="https://instagram.com/dan_i_24" target='_blank' rel="noreferrer"><AiFillInstagram/></a>
            <a href="https://github.com/dani24sahu" target='_blank' rel="noreferrer"><AiFillGithub /></a>
        </aside>
        </footer>
    </>
  )
}

export default Footer