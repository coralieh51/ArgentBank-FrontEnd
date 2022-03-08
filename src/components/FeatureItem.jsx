export default function FeatureItem({text, title, imgSrc}) {
    return(
        <div className="feature-item">
            <img src={imgSrc} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
              {text}
            </p>
          </div>
    )
}