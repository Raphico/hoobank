import { logo } from "../assets"
import { useState } from "react"
import { motion } from "framer-motion"

function Navbar() {
  const [showNav, setShowNav] = useState(false)

  const handleNav = () => {
    setShowNav(oldNavValue => !oldNavValue)
  }

  return (
    <motion.nav 
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ type: "tween" }}
      className="nav flex"
    >
      <div>
        <img className="logo" src={logo} alt="" />
      </div>

      <button
        className="mobile-menu-toggle"  
        aria-controls="primary-navigation"
        aria-expanded={showNav}
        onClick={handleNav}
      >
        <span className="screen-reader-only">
          Menu
        </span> 
      </button>

      <ul 
        id="primary-navigation" 
        className="primary-navigation flex"
        role="list"
        data-visible={showNav}
      >
        <li className="nav-item">
          <a className="fs-300 clr-dimWhite" href="#">Home</a>
        </li>

        <li className="nav-item">
          <a className="fs-300 clr-dimWhite" href="#">About Us</a>
        </li>

        <li className="nav-item">
          <a className="fs-300 clr-dimWhite" href="#">Features</a>
        </li>

        <li className="nav-item">
          <a className="fs-300 clr-dimWhite" href="#">Solution</a>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Navbar
