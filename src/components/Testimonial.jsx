import { quotes } from "../assets"

function Testimonial({ testimonial, imgUrl, name, position }) {
  const style = {
    "--gap": "1rem"
  }

  return (
    <div className="testimonial-card flow">
      <div>
        <img src={quotes} alt="quotes" />
      </div>

      <p>
        {testimonial}
      </p>

      <div className="flex" style={style}>
        <div>
          <img className="pfp" src={imgUrl} alt={`${name} profile picture`} />
        </div>

        <div>
          <p className="fw-600">{name}</p>
          <p>{position}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
