import Image from "next/image"
import SectionHeader from "@/components/section-header"
import ServiceCard from "@/components/service-card"
import FeatureItem from "@/components/feature-item"
import PageTransition from "@/components/animations/page-transition"
import ScrollReveal from "@/components/animations/scroll-reveal"
import Parallax from "@/components/animations/parallax"
import TextReveal from "@/components/animations/text-reveal"
import ScrollProgress from "@/components/animations/scroll-progress"
import StatsSection from "@/components/stats-section"
import { Button } from "@/components/ui/button"
import AnimatedLogo from "@/components/animated-logo"

export default function Home() {
  // Define placeholder image for fallback
  const placeholderImage = "/strategic-growth.png"

  return (
    <PageTransition>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right" duration={0.7}>
              <div className="flex items-center mb-6">
                <AnimatedLogo size="md" variant="icon" />
                <TextReveal
                  text="Transformando sua Governança de TI"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold ml-4"
                  tag="h1"
                />
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Consultoria especializada em governança, infraestrutura e implementação de inteligência artificial para
                pequenas e médias empresas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/servicos">Nossos Serviços</Button>
                <Button href="/contato" variant="secondary">
                  Vamos trabalhar juntos?
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" duration={0.7} delay={0.2}>
              <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                <AnimatedLogo size="xl" variant="full" className="absolute z-10" />
                <Parallax speed={0.2}>
                  <Image
                    src={placeholderImage || "/placeholder.svg"}
                    alt="FACTI Solutions Hero"
                    fill
                    className="object-contain opacity-50"
                    priority
                  />
                </Parallax>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <ScrollReveal>
            <SectionHeader
              title="Nossos Serviços"
              subtitle="Soluções personalizadas que equilibram segurança, eficiência e inovação para impulsionar o crescimento sustentável do seu negócio."
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              imageSrc={placeholderImage}
              title="Governança de TI"
              description="Desenvolvemos estruturas de governança que equilibram controle e agilidade, criando políticas claras e alinhadas aos objetivos do seu negócio."
              link="/servicos#governanca"
              linkText="Saiba Mais"
            />

            <ServiceCard
              imageSrc={placeholderImage}
              title="Infraestrutura & Equipe"
              description="Ajudamos a selecionar as ferramentas certas, implementar fluxos de trabalho eficientes e otimizar a gestão de fornecedores e licenças."
              link="/servicos#infraestrutura"
              linkText="Saiba Mais"
            />

            <ServiceCard
              imageSrc={placeholderImage}
              title="Consultoria em IA"
              description="Desmistificamos a IA com aplicações práticas que geram valor imediato, desde treinamentos até implementações customizadas."
              link="/servicos#ia"
              linkText="Saiba Mais"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <Parallax speed={0.1} className="relative h-[400px]">
                <Image
                  src={placeholderImage || "/placeholder.svg"}
                  alt="FACTI Solutions Expertise"
                  fill
                  className="object-cover rounded-lg"
                />
              </Parallax>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <TextReveal
                text="A empresa certa para o seu negócio"
                className="text-3xl md:text-4xl font-bold mb-6"
                tag="h2"
              />
              <p className="text-lg text-gray-600 mb-4">
                A FACTI Solutions nasceu da percepção de que pequenas e médias empresas frequentemente enfrentam
                desafios de TI semelhantes aos de grandes corporações, mas sem acesso aos mesmos recursos e expertise.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa abordagem combina as melhores práticas do mercado com uma visão pragmática, garantindo
                implementações bem-sucedidas e resultados tangíveis.
              </p>

              <ScrollReveal staggerChildren staggerDelay={0.1}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <FeatureItem text="Excelência Técnica" />
                  <FeatureItem text="Integridade" />
                  <FeatureItem text="Pragmatismo" />
                  <FeatureItem text="Personalização" />
                </div>
              </ScrollReveal>

              <Button href="/sobre">Conheça Nossa História</Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="section-lg bg-gradient-to-r from-brand-blue to-brand-navy text-white">
        <Parallax speed={0.05} direction="down" className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <TextReveal
                text="Implementando Inteligência Artificial no seu negócio"
                className="text-3xl md:text-4xl font-bold mb-6"
                tag="h2"
              />
              <p className="text-xl mb-12">
                A inteligência artificial não precisa ser complexa ou inacessível. Nossa abordagem desmistifica a IA,
                focando em aplicações práticas que geram valor imediato para seu negócio.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20 hover:translate-y-[-5px]">
                <h3 className="text-xl font-bold mb-3">Automação Inteligente</h3>
                <p>
                  Automatize processos repetitivos e libere sua equipe para tarefas de maior valor estratégico com
                  ferramentas como ChatGPT e RPA.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20 hover:translate-y-[-5px]">
                <h3 className="text-xl font-bold mb-3">Análise Avançada de Dados</h3>
                <p>
                  Transforme dados em insights acionáveis que impulsionam decisões estratégicas e revelam oportunidades
                  ocultas.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20 hover:translate-y-[-5px]">
                <h3 className="text-xl font-bold mb-3">Soluções Customizadas</h3>
                <p>
                  Desenvolvemos soluções de IA adaptadas aos desafios específicos do seu negócio, garantindo resultados
                  relevantes e mensuráveis.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <Button href="/servicos#ia" variant="secondary">
                Explore Nossas Soluções de IA
              </Button>
            </div>
          </ScrollReveal>
        </Parallax>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <TextReveal
                text="Pronto para transformar sua TI?"
                className="text-3xl md:text-4xl font-bold mb-4"
                tag="h2"
              />
              <p className="text-xl text-gray-600 mb-8">
                Entre em contato para uma consulta inicial gratuita e descubra como podemos ajudar sua empresa a
                alcançar excelência operacional através de governança de TI estruturada.
              </p>
              <Button href="/contato" size="lg" variant="gradient">
                Fale Conosco
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
