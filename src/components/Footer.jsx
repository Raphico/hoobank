import { facebook, instagram, linkedin, logo, twitter } from "../assets"
import { motion } from "framer-motion"

function Footer() {
  const style = {
    "--gap": "1rem"
  }

  return (
    <motion.footer 
      className="footer flow"
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ type: "tween" }}  
    >
      <div className="footer-1 flex">
        <div className="footer-text flow">
          <div>
            <img src={logo} alt="hoobank logo" />
          </div>

          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="footer-links grid">
          <ul role="list">
            <li className="footer-titling fw-600">Useful Links</li>
            <a href="#"><li>Content</li></a>
            <a href="#"><li>How It Works</li></a>
            <a href="#"><li>Create</li></a>
            <a href="#"><li>Explore</li></a>
            <a href="#"><li>Terms & Services</li></a>
          </ul>

          <ul role="list">
            <li className="footer-titling fw-600">Community</li>
            <a href="#"><li>Help Center</li></a>
            <a href="#"><li>Partners</li></a>
            <a href="#"><li>Suggestion</li></a>
            <a href="#"><li>Blog</li></a>
            <a href="#"><li>Newsletter</li></a>
          </ul>

          <ul role="list">
            <li className="footer-titling fw-600">Partner</li>
            <a href="#"><li>Our Partner</li></a>
            <a href="#"><li>Become a Partner</li></a>
          </ul>
        </div>
      </div>

      <div className="footer-bar"></div>

      <div className="socials">
        <p>Copyright &#169; 2021 HooBank. All Rights Reserved</p>
        <div className="flex" style={style}>
          <a href="#">
            <img src={instagram} alt="instagram logo" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook logo" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter logo" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
