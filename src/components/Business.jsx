import { features } from "../constants"
import FeatureCard from "./FeatureCard"
import Section from "./Section"
import { motion } from "framer-motion"
import variant from "../utils/motion"

function Business() {

  const featureCardElements = features.map(feature => <FeatureCard
      key={feature.id}
      imgUrl={feature.imgUrl}
      title={feature.title}
      detail={feature.detail}
    />)

  return (
    <motion.div 
      className="even-columns grid"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <div className="flow">
        <Section
          title={"You do the business, we’ll handle the money."}
          details={
            "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
          }
        />
      </div>

      <div className="feature-cards grid">
        {featureCardElements}
      </div>
    </motion.div>
  )
}

export default Business
