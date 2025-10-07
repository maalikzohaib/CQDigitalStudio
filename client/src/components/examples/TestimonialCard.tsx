import TestimonialCard from '../TestimonialCard'

export default function TestimonialCardExample() {
  return (
    <div className="p-8">
      <TestimonialCard
        name="Sarah Johnson"
        role="Bride"
        rating={5}
        content="CQ Digital Studio captured our wedding day perfectly! The photos are absolutely stunning and we couldn't be happier with the results."
      />
    </div>
  )
}
