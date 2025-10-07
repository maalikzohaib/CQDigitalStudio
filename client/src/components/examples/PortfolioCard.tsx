import PortfolioCard from '../PortfolioCard'
import weddingImage from '@assets/generated_images/Wedding_portfolio_sample_1f6f9bd5.png'

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
