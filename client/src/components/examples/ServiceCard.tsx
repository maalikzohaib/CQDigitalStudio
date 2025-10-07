import ServiceCard from '../ServiceCard'
import { Camera } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <div className="p-8">
      <ServiceCard
        icon={Camera}
        title="Wedding Photography"
        description="Capture your special day with stunning imagery that tells your unique love story."
      />
    </div>
  )
}
