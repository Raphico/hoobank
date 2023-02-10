function FeatureCard({ imgUrl, title, detail }) {
  return (
    <div className={`feature-card flex`}>
      <div className="feature-img-container bg-dimBlue">
        <img src={imgUrl} alt="" />
      </div>

      <div>
        <p className="fw-600">{title}</p>
        <p>{detail}</p>
      </div>
    </div>
  )
}

export default FeatureCard
