"use client"

import TextReveal from "./animations/text-reveal"
import ScrollReveal from "./animations/scroll-reveal"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <TextReveal text={title} className="text-3xl md:text-4xl font-bold mb-4" tag="h2" />

      {subtitle && (
        <ScrollReveal direction="up" delay={0.2} once={true}>
          <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  )
}
