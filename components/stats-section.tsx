"use client"

import { Users, Award, Clock, Briefcase } from "lucide-react"
import StatCard from "./animations/stat-card"
import ScrollReveal from "./animations/scroll-reveal"

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Resultados em Números</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard value={150} label="Clientes Atendidos" suffix="+" icon={<Users size={32} />} />

          <StatCard value={98} label="Taxa de Satisfação" suffix="%" decimals={1} icon={<Award size={32} />} />

          <StatCard value={10000} label="Horas de Consultoria" suffix="+" icon={<Clock size={32} />} />

          <StatCard value={85} label="Projetos Concluídos" suffix="+" icon={<Briefcase size={32} />} />
        </div>
      </div>
    </section>
  )
}
