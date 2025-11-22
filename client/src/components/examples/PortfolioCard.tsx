import PortfolioCard from '../PortfolioCard'
const weddingImage = "/assets/hero/wedding-sample.png";

export default function PortfolioCardExample() {
  return (
    <div className="p-8">
      <PortfolioCard
        image={weddingImage}
        title="Sarah & Michael's Wedding"
        category="Wedding"
        onClick={() => console.log('Portfolio card clicked')}
      />
    </div>
  )
}
