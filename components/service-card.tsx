"use client"

import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

interface ServiceCardProps {
  icon?: LucideIcon
  title: string
  description: string
  link?: string
  linkText?: string
  imageSrc?: string
}

export default function ServiceCard({ icon: Icon, title, description, link, linkText, imageSrc }: ServiceCardProps) {
  // Fix: Only render the Image component if imageSrc is a non-empty string
  const hasValidImage = typeof imageSrc === "string" && imageSrc.trim() !== ""

  // Default placeholder for when we need an image but don't have a valid one
  const placeholderImage = "/strategic-growth.png"

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col transition-shadow duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {hasValidImage ? (
        <motion.div
          className="relative h-48 mb-4 rounded-md overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </motion.div>
      ) : Icon ? (
        <motion.div
          className="text-brand-blue mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Icon size={48} />
        </motion.div>
      ) : null}

      <motion.h3
        className="text-xl font-bold mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className="text-gray-600 mb-6 flex-grow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {description}
      </motion.p>

      {link && linkText && (
        <motion.div
          className="mt-auto self-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button href={link} variant="dark" size="sm">
            {linkText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}
