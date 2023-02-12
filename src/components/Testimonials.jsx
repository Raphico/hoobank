import { testimonials } from "../constants"
import Testimonial from "./Testimonial"
import { motion } from "framer-motion"
import variant from "../utils/motion"

function Testimonials() {
  const testimonialElements = testimonials.map(testimonial => {
    return <Testimonial
      key={testimonial.id}
      testimonial={testimonial.testimonial}
      imgUrl={testimonial.imgUrl}
      name={testimonial.name}
      position={testimonial.position}
    />
  })

  return (
    <motion.div 
      className="flow"
      initial={variant.hidden}
      whileInView={variant.show}
    >
      <h2 className="fs-500 fw-600 text-center">
        Testimonials
      </h2>

      <div className="testimonials grid">
        {testimonialElements}
      </div>
    </motion.div>
  )
}
export default Testimonials