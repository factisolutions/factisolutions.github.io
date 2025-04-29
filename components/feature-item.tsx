"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureItemProps {
  text: string
}

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <motion.div
      className="flex items-start space-x-3 mb-3"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="text-green-500 mt-1"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
      >
        <Check size={18} />
      </motion.div>
      <p>{text}</p>
    </motion.div>
  )
}
