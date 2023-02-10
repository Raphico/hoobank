import GetStartedButton from "./GetStartedButton"
import { motion } from "framer-motion"

function CTA() {
  return (
    <motion.div 
      className="cta flow box-shadow bg-black-gradient-2"
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ type: "tween" }}  
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