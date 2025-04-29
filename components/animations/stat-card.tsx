"use client"

import type React from "react"

import { motion } from "framer-motion"
import CountUp from "./count-up"

interface StatCardProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
  icon?: React.ReactNode
  className?: string
}

export default function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  icon,
  className = "",
}: StatCardProps) {
  return (
    <motion.div
      className={`bg-white p-6 rounded-lg shadow-md ${className}`}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      {icon && <div className="text-brand-blue mb-3">{icon}</div>}
      <div className="text-3xl font-bold mb-2">
        <CountUp end={value} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  )
}
