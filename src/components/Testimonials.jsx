import { testimonials } from "../constants"
import Testimonial from "./Testimonial"
import { motion } from "framer-motion"

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
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
      transition={{ type: "tween" }}
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