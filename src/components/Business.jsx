import { features } from "../constants"
import FeatureCard from "./FeatureCard"
import Section from "./Section"
import { motion } from "framer-motion"

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
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ type: "tween" }}
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
