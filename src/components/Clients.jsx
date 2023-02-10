import { airbnb, binance, coinbase, dropbox } from "../assets"
import { motion } from "framer-motion"

function Clients() {
  return (
    <motion.div 
      className="clients grid"
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ type: "tween" }}
    >
      <img src={airbnb} alt="airbnb logo" />
      <img src={binance} alt="binance logo" />
      <img src={coinbase} alt="coinbase logo" />
      <img src={dropbox} alt="dropbox logo" />
    </motion.div>
  )
}
export default Clients