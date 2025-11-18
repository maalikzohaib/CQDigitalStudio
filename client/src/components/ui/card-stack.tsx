import { useEffect, useMemo, useState } from "react"
import { motion, type Transition } from "framer-motion"
import { cn } from "@/lib/utils"
import image1 from "@assets/GI5A8116_1760177450748.JPG"
import image2 from "@assets/IMG_1071 - Copy_1760177450748.JPG"
import image3 from "@assets/IMG_1759 - Copy_1760177450748.JPG"
import image4 from "@assets/IMG_4571_1760177450748.jpg"
import image5 from "@assets/IMG_6508 - Copy_1760177450747.JPG"

type ImageSource = string | { src: string; alt?: string }

type Card = {
  id: string
  src: string
  alt?: string
}

const DEFAULT_IMAGES: Array<{ src: string; alt: string }> = [
  {
    src: image1,
    alt: "Elegant bridal portrait with red veil",
  },
  {
    src: image2,
    alt: "Joyful celebration moment",
  },
  {
    src: image3,
    alt: "Photographer capturing moments",
  },
  {
    src: image4,
    alt: "Serene outdoor portrait",
  },
  {
    src: image5,
    alt: "Freedom in the fields",
  },
]

function normalizeImages(images?: ImageSource[]): Card[] {
  const list =
    images && images.length > 0
      ? images.map((item) =>
          typeof item === "string"
            ? { src: item, alt: "" }
            : { src: item.src, alt: item.alt ?? "" },
        )
      : DEFAULT_IMAGES

  return list.map((item, index) => ({
    id: `card-${index}`,
    src: item.src,
    alt: item.alt,
  }))
}

interface CardStackProps {
  images?: ImageSource[]
  className?: string
  aspectRatio?: string
  borderRadius?: number
  offsetPercent?: number
  scaleStep?: number
  dimStep?: number
  stiffness?: number
  damping?: number
}

export function CardStack({
  images,
  className,
  aspectRatio = "16 / 9",
  borderRadius = 18,
  offsetPercent = 8,
  scaleStep = 0.06,
  dimStep = 0.18,
  stiffness = 190,
  damping = 26,
}: CardStackProps) {
  const imagesKey = useMemo(() => JSON.stringify(images ?? []), [images])
  const normalizedImages = useMemo(
    () => normalizeImages(images),
    [imagesKey],
  )
  const [cards, setCards] = useState<Card[]>(normalizedImages)

  useEffect(() => {
    setCards(normalizedImages)
  }, [normalizedImages])

  const moveToEnd = (index: number) => {
    setCards((prev) => {
      if (index < 0 || index >= prev.length) {
        return prev
      }
      return [...prev.slice(index + 1), prev[index]]
    })
  }

  const spring: Transition | undefined =
    stiffness > 0 && damping > 0
      ? { type: "spring", stiffness, damping }
      : undefined

  return (
    <div
      className={cn(
        "relative w-full max-w-md",
        "flex h-auto items-center justify-center",
        className,
      )}
      style={{ aspectRatio }}
    >
      <ul className="relative h-full w-full list-none p-0 m-0">
        {cards.map(({ id, src, alt }, index) => {
          const isFront = index === 0
          const brightness = Math.max(0.2, 1 - index * dimStep)
          const zIndex = cards.length - index

          return (
            <motion.li
              key={id}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius,
                overflow: "hidden",
                cursor: isFront ? "grab" : "auto",
                boxShadow:
                  "0 25px 50px -12px rgba(15, 23, 42, 0.35)",
              }}
              animate={{
                top: `-${offsetPercent * index}%`,
                scale: 1 - index * scaleStep,
                filter: `brightness(${brightness})`,
                zIndex,
              }}
              transition={spring}
              drag={isFront ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.12}
              dragMomentum={false}
              onDragEnd={() => moveToEnd(index)}
              whileDrag={
                isFront
                  ? {
                      cursor: "grabbing",
                      zIndex: cards.length + 1,
                      scale: 1 - index * scaleStep + 0.05,
                      rotate: 2,
                    }
                  : undefined
              }
            >
              <img
                src={src}
                alt={alt || "Card image"}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
