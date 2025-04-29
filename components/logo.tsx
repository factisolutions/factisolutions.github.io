"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface LogoProps {
  variant?: "full" | "icon" | "text"
  size?: "sm" | "md" | "lg"
  className?: string
  linkClassName?: string
  textColor?: string
  animated?: boolean
}

export default function Logo({
  variant = "full",
  size = "md",
  className = "",
  linkClassName = "",
  textColor = "text-gray-900",
  animated = true,
}: LogoProps) {
  const logoIcon = "/images/facti-icon.png"
  const logoFull = "/images/facti-logo.jpg"

  const sizeClasses = {
    sm: {
      container: "h-8",
      icon: "w-8 h-8",
      text: "text-lg",
    },
    md: {
      container: "h-10",
      icon: "w-10 h-10",
      text: "text-xl",
    },
    lg: {
      container: "h-12",
      icon: "w-12 h-12",
      text: "text-2xl",
    },
  }

  // Animation variants
  const iconAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Number.POSITIVE_INFINITY,
        repeatDelay: 0.5,
      },
    },
  }

  const textAnimation = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
    hover: {
      color: "#00D8D6",
      transition: { duration: 0.3 },
    },
  }

  // Gradient animation for the icon
  const gradientAnimation = {
    initial: {
      background: "linear-gradient(90deg, #0056b3 0%, #00D8D6 100%)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  if (variant === "icon") {
    return (
      <Link href="/" className={`block ${linkClassName}`}>
        <motion.div
          className={`relative ${sizeClasses[size].icon} ${className}`}
          initial={animated ? iconAnimation.initial : undefined}
          animate={animated ? iconAnimation.animate : undefined}
          whileHover={animated ? iconAnimation.hover : undefined}
        >
          <Image src={logoIcon || "/placeholder.svg"} alt="FACTI Solutions Logo" fill className="object-contain" />

          {/* Subtle glow effect */}
          {animated && (
            <motion.div
              className="absolute inset-0 rounded-full bg-brand-teal opacity-0"
              animate={{
                opacity: [0, 0.2, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          )}
        </motion.div>
      </Link>
    )
  }

  if (variant === "text") {
    return (
      <Link href="/" className={`block ${linkClassName}`}>
        <motion.span
          className={`font-bold ${sizeClasses[size].text} ${textColor} ${className}`}
          initial={animated ? textAnimation.initial : undefined}
          animate={animated ? textAnimation.animate : undefined}
          whileHover={animated ? textAnimation.hover : undefined}
        >
          <motion.span>F</motion.span>
          <motion.span>A</motion.span>
          <motion.span>C</motion.span>
          <motion.span>T</motion.span>
          <motion.span>I</motion.span>
          <motion.span> </motion.span>
          <motion.span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
            SOLUTIONS
          </motion.span>
        </motion.span>
      </Link>
    )
  }

  // Full logo (default)
  return (
    <Link href="/" className={`flex items-center space-x-2 ${linkClassName}`}>
      <motion.div
        className={`relative ${sizeClasses[size].icon}`}
        initial={animated ? iconAnimation.initial : undefined}
        animate={animated ? iconAnimation.animate : undefined}
        whileHover={animated ? { scale: 1.05, rotate: [0, 5, 0, -5, 0], transition: { duration: 0.5 } } : undefined}
      >
        <Image src={logoIcon || "/placeholder.svg"} alt="FACTI Solutions Logo" fill className="object-contain" />

        {/* Subtle glow effect */}
        {animated && (
          <motion.div
            className="absolute inset-0 rounded-full bg-brand-teal opacity-0"
            animate={{
              opacity: [0, 0.2, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        )}
      </motion.div>

      <motion.div
        initial={animated ? textAnimation.initial : undefined}
        animate={animated ? textAnimation.animate : undefined}
      >
        <motion.span
          className={`font-bold ${sizeClasses[size].text} ${textColor}`}
          whileHover={animated ? { color: "#00D8D6", transition: { duration: 0.3 } } : undefined}
        >
          <motion.span className="inline-block">FACTI</motion.span>{" "}
          <motion.span
            className="inline-block bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent"
            animate={
              animated
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : undefined
            }
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
        </motion.span>
      </motion.div>
    </Link>
  )
}
