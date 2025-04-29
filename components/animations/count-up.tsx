"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
  once?: boolean
  threshold?: number
}

export default function CountUp({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  once = true,
  threshold = 0.1,
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    // Only start animation when in view and after delay
    if (isInView) {
      const timeout = setTimeout(() => {
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
          const currentCount = progress * (end - start) + start

          setCount(currentCount)

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate)
          }
        }

        animationFrame = requestAnimationFrame(animate)
      }, delay * 1000)

      return () => {
        clearTimeout(timeout)
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, start, end, duration, delay])

  // Format the number with decimals
  const formattedCount = count.toFixed(decimals)

  return (
    <div ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </div>
  )
}
