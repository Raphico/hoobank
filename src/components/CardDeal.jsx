import { card } from "../assets"
import Section from "./Section"
import { motion } from "framer-motion"
import variant from "../utils/motion"

function CardDeal() {
  return (
    <motion.div 
      className="even-columns grid"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <div className="flow">
        <Section 
          title={"Find a better card deal in few easy steps."}
          details={
            "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
          }
        />
      </div>

      <div>
        <img src={card} alt="card deal" /> 
      </div>
    </motion.div>
  )
}

export default CardDeal
