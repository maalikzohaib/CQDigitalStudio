import { useState, useCallback, useMemo } from "react";
import { motion, PanInfo } from "framer-motion";

interface CardData {
  image?: {
    src: string;
    srcSet?: string;
    alt?: string;
    positionX?: string;
    positionY?: string;
  };
  title?: string;
  description?: string;
}

interface FlipCardProps {
  cards: CardData[];
  cardWidth?: number;
  cardHeight?: number;
  stackOffset?: number;
  stackRotation?: number;
  dragThreshold?: number;
  animationDuration?: number;
  animationEase?: string;
  borderRadius?: number;
  shadowIntensity?: number;
  className?: string;
}

export default function FlipCard({
  cards,
  cardWidth = 300,
  cardHeight = 400,
  stackOffset = 8,
  stackRotation = 2,
  dragThreshold = 80,
  animationDuration = 0.3,
  animationEase = "easeOut",
  borderRadius = 16,
  shadowIntensity = 0.2,
  className = "",
}: FlipCardProps) {
  const [cardOrder, setCardOrder] = useState(() =>
    cards.map((_, index) => index)
  );

  // Calculate z-index and transform for each card based on position in stack
  const getCardTransform = useCallback(
    (index: number, cardIndex: number) => {
      const stackPosition = cardOrder.indexOf(cardIndex);
      const positionFromBottom = cardOrder.length - 1 - stackPosition;
      
      return {
        zIndex: stackPosition,
        y: -positionFromBottom * stackOffset,
        rotate: positionFromBottom * stackRotation,
        scale: 1 - positionFromBottom * 0.02,
        opacity: 1,
      };
    },
    [cardOrder, stackOffset, stackRotation]
  );

  // Handle drag end to determine if card should flip to back
  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo, cardIndex: number) => {
      const dragDistance = Math.abs(info.offset.x) + Math.abs(info.offset.y);
      const velocity = Math.abs(info.velocity.x) + Math.abs(info.velocity.y);

      // Check if drag meets threshold (distance or velocity)
      if (dragDistance > dragThreshold || velocity > 800) {
        // Move the dragged card to the bottom of the stack
        setCardOrder((prevOrder) => {
          const newOrder = [...prevOrder];
          const draggedCardPosition = newOrder.indexOf(cardIndex);
          const draggedCard = newOrder.splice(draggedCardPosition, 1)[0];
          newOrder.unshift(draggedCard); // Add to beginning (bottom of stack)
          return newOrder;
        });
      }
    },
    [dragThreshold]
  );

  // Animation variants for instant, realistic transitions
  const cardVariants = {
    initial: (custom: any) => ({
      ...custom,
      x: 0,
      y: custom.y,
    }),
    animate: (custom: any) => ({
      ...custom,
      x: 0,
      y: custom.y,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 500,
        mass: 0.5,
        restDelta: 0.01,
        restSpeed: 0.01,
      },
    }),
    drag: {
      scale: 1.05,
      rotate: 0,
      transition: {
        duration: 0.05,
      },
    },
  };

  // Memoized card components for performance
  const renderedCards = useMemo(() => {
    return cards.map((card, index) => {
      const transform = getCardTransform(index, index);
      const isTopCard = cardOrder.indexOf(index) === cardOrder.length - 1;

      return (
        <motion.div
          key={`card-${index}`}
          data-testid={`flipcard-card-${index}`}
          custom={transform}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileDrag="drag"
          drag={isTopCard}
          dragConstraints={{
            top: -150,
            bottom: 150,
            left: -150,
            right: 150,
          }}
          dragElastic={0.2}
          dragSnapToOrigin={true}
          dragTransition={{
            power: 0.3,
            timeConstant: 125,
            bounceStiffness: 500,
            bounceDamping: 30,
          }}
          onDragEnd={(event, info) => handleDragEnd(event, info, index)}
          style={{
            position: "absolute",
            width: cardWidth,
            height: cardHeight,
            borderRadius,
            overflow: "hidden",
            cursor: isTopCard ? "grab" : "default",
            boxShadow: `0px ${4 + transform.zIndex * 2}px ${
              8 + transform.zIndex * 4
            }px rgba(0, 0, 0, ${shadowIntensity})`,
          }}
          whileHover={isTopCard ? { scale: 1.02 } : {}}
        >
          {card.image && (
            <img
              src={card.image.src}
              srcSet={card.image.srcSet}
              alt={card.image.alt || `Card ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: `${card.image.positionX || "50%"} ${
                  card.image.positionY || "50%"
                }`,
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          )}
          {(card.title || card.description) && (
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                color: "white",
                padding: "24px",
                textAlign: "left",
              }}
            >
              {card.title && (
                <h3
                  style={{
                    margin: "0 0 4px 0",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  {card.title}
                </h3>
              )}
              {card.description && (
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    opacity: 0.8,
                  }}
                >
                  {card.description}
                </p>
              )}
            </div>
          )}
        </motion.div>
      );
    });
  }, [
    cards,
    cardOrder,
    cardWidth,
    cardHeight,
    borderRadius,
    shadowIntensity,
    getCardTransform,
    cardVariants,
    handleDragEnd,
  ]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: cardWidth,
        height: cardHeight,
        perspective: "1000px",
      }}
    >
      {renderedCards}
      {cards.length === 0 && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f0f0f0",
            borderRadius,
            border: "2px dashed #ccc",
            color: "#666",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Add cards to create
          <br />
          your flip stack
        </div>
      )}
    </div>
  );
}
