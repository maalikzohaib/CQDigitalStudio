import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Sarah Mitchell",
    profession: "Fashion Brand Owner",
    rating: 5,
    description:
      "CQ Digital Studio captured the essence of our brand perfectly. Their creative vision and technical expertise resulted in stunning visuals that exceeded our expectations.",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    profession: "Event Coordinator",
    rating: 5,
    description:
      "Their wedding photography and videography team was absolutely phenomenal. They captured every special moment with such artistry and professionalism.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    profession: "Marketing Director",
    rating: 4.5,
    description:
      "Working with CQ Digital Studio elevated our corporate content to a whole new level. Their attention to detail and creative approach made all the difference.",
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: "testimonial-4",
    name: "James Thompson",
    profession: "Restaurant Owner",
    rating: 5,
    description:
      "The food photography they delivered was absolutely mouth-watering. Our social media engagement increased by 300% after using their images.",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-black text-white px-8 py-12">
      <div>
        <h3 className="text-center text-4xl font-semibold">Client Testimonials</h3>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-gray-400">
          Discover what our clients say about their experience working with our creative team.
        </p>
      </div>
      <ContainerScroll className="container h-[300vh]">
        <div className="sticky left-0 top-0 h-screen w-full py-12">
          <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                variant="dark"
                index={index + 2}
                role="article"
                aria-labelledby={`card-${testimonial.id}-title`}
                aria-describedby={`card-${testimonial.id}-content`}
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <ReviewStars
                    className="text-purple-400"
                    rating={testimonial.rating}
                    data-testid={`rating-testimonial-${index}`}
                  />
                  <div 
                    id={`card-${testimonial.id}-content`}
                    className="mx-auto w-4/5 text-lg text-gray-300"
                    data-testid={`text-testimonial-${index}`}
                  >
                    <blockquote cite="#">"{testimonial.description}"</blockquote>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="!size-12 border border-stone-700">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={`Portrait of ${testimonial.name}`}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span 
                      id={`card-${testimonial.id}-title`}
                      className="block text-lg font-semibold tracking-tight text-white md:text-xl"
                      data-testid={`text-name-${index}`}
                    >
                      {testimonial.name}
                    </span>
                    <span 
                      className="block text-sm text-gray-400"
                      data-testid={`text-profession-${index}`}
                    >
                      {testimonial.profession}
                    </span>
                  </div>
                </div>
              </CardTransformed>
            ))}
          </CardsContainer>
        </div>
      </ContainerScroll>
    </section>
  )
}