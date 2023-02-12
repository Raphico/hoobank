import { apple, bill, google } from "../assets"
import { motion } from "framer-motion"
import variant from "../utils/motion"

function Billing() {
  const style = {
    "--gap": "1rem"
  }

  return (
    <motion.div 
      className="even-columns grid"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <div>
        <img src={bill} alt="bill" />
      </div>

      <div className="flow">
        <h2 className="fs-500 fw-600">
          Easily control your billing & invoicing.
        </h2>

        <p>
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Unde exercitationem, 
          quas aliquam quisquam inventore dolorum 
          deserunt nam enim iste eaque!
        </p>

        <div className="flex" style={style}>
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </motion.div>
  )
}

export default Billing
