"use client"

import { useScroll, motion, useSpring } from "framer-motion"

interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
}

export default function ScrollProgress({ color = "#00D8D6", height = 4, zIndex = 50 }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0"
      style={{
        scaleX,
        transformOrigin: "0%",
        background: `linear-gradient(to right, #00D8D6, #0056b3)`,
        height,
        zIndex,
      }}
    />
  )
}
