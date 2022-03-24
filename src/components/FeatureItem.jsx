/**
 * @component FeatureItem (displayed in homepage) 
 */
export default function FeatureItem({ text, title, imgSrc, alt }) {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
