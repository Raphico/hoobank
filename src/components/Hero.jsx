import { robot, discount } from "../assets"
import GetStarted from "./GetStarted"
import { motion } from "framer-motion"
import variant from "../utils/motion"

function Hero() {
  return (
    <motion.div 
      className="hero grid"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <div>
        <div className="discount bg-discount-gradient">
          <img src={discount} alt="discount" />
          <p>
            20%
            <span className="clr-dimWhite"> discount for </span>
            1 month
            <span className="clr-dimWhite"> account </span>
          </p>
        </div>

        <div className="next-generation flex">
          <h1 className="fs-600 fw-600">
            The Next 
            <span className="text-gradient"> Generation </span>
            Payment Method
          </h1>
          <GetStarted />
        </div>

        <div>
          <p>
            Our team of experts uses a methodology to 
            identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.
          </p>
        </div>
      </div>

      <div className="robot-container">
        <img className="robot" src={robot} alt="hero" />
      </div>
    </motion.div>
  )
}

export default Hero
