import { motion } from "framer-motion"
import CountUp from "react-countup"
import variant from "../utils/motion"

function Stats() {
  return (
    <motion.div 
      className="stats flex"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <div className="stat flex">
        <h2 className="fs-500 fw-600">
          <CountUp 
            start={0} 
            end={3800} 
            duration={1.5} 
            enableScrollSpy
          />+
        </h2>
        <h2 className="fs-401 text-gradient">user active</h2>
      </div>

      <div className="bar"></div>
      
      <div className="stat flex">
        <h2 className="fs-500 fw-600">
          <CountUp 
            start={0} 
            end={230} 
            duration={1.5} 
            enableScrollSpy
          />+
        </h2>
        <h2 className="fs-401 text-gradient">trusted by company</h2>
      </div>

      <div className="bar"></div>

      <div className="stat flex">
        <h2 className="fs-500 fw-600">
          $<CountUp 
            start={0} 
            end={230} 
            duration={1.5} 
            enableScrollSpy
          />+
        </h2>
        <h2 className="fs-401 text-gradient">transaction</h2>
      </div>
    </motion.div>
  )
}

export default Stats
