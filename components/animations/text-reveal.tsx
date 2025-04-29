"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import type { JSX } from "react"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  once = true,
  threshold = 0.1,
  tag = "div",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  // Split text into words
  const words = text.split(" ")

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const Tag = tag as keyof JSX.IntrinsicElements

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={child} className="mr-1 mb-1">
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
