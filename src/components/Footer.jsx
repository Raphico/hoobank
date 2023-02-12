import { facebook, instagram, linkedin, logo, twitter } from "../assets"
import { motion } from "framer-motion"
import variant from "../utils/motion"
import { footerLinks, socialMedia } from "../constants"

function Footer() {
  const style = {
    "--gap": "1rem"
  }

  const socialElements = socialMedia.map(social => 
    <div key={social.id} className="flex" style={style}>
      <a href={social.link}>
        <img src={social.icon} alt={`${social.icon} link`} />
      </a>
    </div>
  )

  const footerLinkElements = footerLinks.map(footerLink => 
      <ul key={footerLink.title} role="list">
        <li className="footer-titling fw-600">{footerLink.title}</li>
        {footerLink.links.map(link => 
          <li key={link.name}>
            <a href={link.link}>
              {link.name}
            </a>
          </li>
        )}
      </ul>
    )

  return (
    <motion.footer 
      className="footer flow"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <div className="footer-1 flex">
        <div className="footer-text flow">
          <div>
            <img src={logo} alt="hoobank logo" />
          </div>

          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="footer-links grid">
          {footerLinkElements}
        </div>
      </div>

      <div className="footer-bar"></div>

      <div className="socials">
        <p>Copyright &#169; 2021 HooBank. All Rights Reserved</p>
        <div className="flex" style={style}>
          {socialElements}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
