import { airbnb, binance, coinbase, dropbox } from "../assets"
import { motion } from "framer-motion"
import variant from "../utils/motion"

function Clients() {
  return (
    <motion.div 
      className="clients grid"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <img src={airbnb} alt="airbnb logo" />
      <img src={binance} alt="binance logo" />
      <img src={coinbase} alt="coinbase logo" />
      <img src={dropbox} alt="dropbox logo" />
    </motion.div>
  )
}
export default Clients