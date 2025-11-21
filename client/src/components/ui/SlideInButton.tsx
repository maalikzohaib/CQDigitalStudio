import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SlideInButtonProps extends HTMLMotionProps<"button"> {
    icon?: React.ReactNode
    children?: React.ReactNode
}

export const SlideInButton = React.forwardRef<HTMLButtonElement, SlideInButtonProps>(
    ({ className, children, icon = <ArrowRight className="w-4 h-4" />, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                className={cn(
                    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-background border border-primary/10 px-8 py-3 text-foreground transition-colors duration-300 disabled:opacity-50 disabled:pointer-events-none",
                    className
                )}
                initial="initial"
                whileHover="hover"
                {...props}
            >
                {/* Background Fill Animation */}
                <motion.div
                    className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary"
                    variants={{
                        initial: {
                            scale: 0,
                            opacity: 0,
                            y: 10,
                        },
                        hover: {
                            scale: 50,
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.33, 1, 0.68, 1],
                    }}
                />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-2 font-medium transition-colors duration-300 group-hover:text-primary-foreground">
                    {children}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {icon}
                    </span>
                </span>
            </motion.button>
        )
    }
)
SlideInButton.displayName = "SlideInButton"
