"use client"

import { motion } from "framer-motion"

interface CharacterCounterProps {
  current: number
  max?: number
  min?: number
  className?: string
}

export default function CharacterCounter({ current, max, min, className = "" }: CharacterCounterProps) {
  // Calculate if we're within limits
  const isUnderMin = min !== undefined && current < min
  const isOverMax = max !== undefined && current > max
  const isWithinLimits = !isUnderMin && !isOverMax

  // Calculate percentage for progress bar
  const percentage = max ? Math.min((current / max) * 100, 100) : 0

  // Determine color based on limits
  const getColor = () => {
    if (isUnderMin) return "#ef4444" // red
    if (max && current > max * 0.9) return "#f59e0b" // amber
    return "#10b981" // emerald
  }

  return (
    <div className={`mt-1 ${className}`}>
      <div className="flex items-center justify-between text-xs">
        <span className={isWithinLimits ? "text-gray-500" : "text-red-500"}>
          {max ? `${current}/${max} caracteres` : `${current} caracteres`}
        </span>

        {min && <span className={isUnderMin ? "text-red-500" : "text-gray-500"}>Mínimo: {min}</span>}
      </div>

      {max && (
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: getColor() }}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </div>
  )
}
