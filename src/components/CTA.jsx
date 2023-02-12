import GetStartedButton from "./GetStartedButton"
import { motion } from "framer-motion"
import variant from "../utils/motion"

function CTA() {
  return (
    <motion.div 
      className="cta flow box-shadow bg-black-gradient-2"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <div className="flow cta-content">
        <h1 className="fs-500 fw-600">
          Let’s try our service now!
        </h1>
        <p>
          Everything you need to accept card payments 
          and grow your business anywhere on the planet.
        </p>
      </div>

      <GetStartedButton />
    </motion.div>
  )
}
export default CTA