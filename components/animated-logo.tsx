"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  variant?: "icon" | "full"
}

export default function AnimatedLogo({ size = "md", className = "", variant = "icon" }: AnimatedLogoProps) {
  const logoIcon = "/images/facti-icon.png"

  const sizeMap = {
    sm: { width: 40, height: 40 },
    md: { width: 60, height: 60 },
    lg: { width: 80, height: 80 },
    xl: { width: 120, height: 120 },
  }

  const { width, height } = sizeMap[size]

  // Animation for the icon
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  // Animation for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  // Animation for the glow effect
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 0.3, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <motion.div initial="hidden" animate={["visible", "pulse"]} variants={iconVariants} className="relative z-10">
          <Image
            src={logoIcon || "/placeholder.svg"}
            alt="FACTI Solutions"
            width={width}
            height={height}
            className="object-contain"
          />
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full blur-md z-0"
          initial="hidden"
          animate="visible"
          variants={glowVariants}
        />
      </div>

      {variant === "full" && (
        <motion.div initial="hidden" animate="visible" variants={textVariants} className="mt-4 text-center">
          <span className="font-bold text-xl md:text-2xl">
            <span>FACTI</span>{" "}
            <motion.span
              className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{ backgroundSize: "200% auto" }}
            >
              SOLUTIONS
            </motion.span>
          </span>
        </motion.div>
      )}
    </div>
  )
}
