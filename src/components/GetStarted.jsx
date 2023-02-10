import { arrowUp } from "../assets"

function GetStarted() {
  return (
    <div className="get-started bg-blue-gradient">
      <div className="get-started-content">
        <p>
          <span className="flex">
            Get <img src={arrowUp} alt="arrow up" />
          </span>
          Started
        </p>
      </div>
    </div>
  )
}

export default GetStarted
