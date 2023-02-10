import GetStartedButton from "./GetStartedButton"

function Section({ title, details }) {
  return (
    <>
      <h2 className="fs-500 fw-600">{title}</h2>
      <p>{details}</p>
      <GetStartedButton />
    </>
  )
}

export default Section
