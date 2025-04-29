import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import FeatureItem from "@/components/feature-item"

export const metadata = {
  title: "Serviços | FACTI Solutions",
  description:
    "Conheça nossos serviços de governança de TI, infraestrutura e implementação de IA para pequenas e médias empresas no Brasil.",
}

export default function ServicosPage() {
  // Define a placeholder image for fallback
  const placeholderImage = "/strategic-growth.png"

  return (
    <>
      <HeroSection
        title="Nossos Serviços"
        subtitle="Soluções personalizadas que equilibram segurança, eficiência e inovação para impulsionar o crescimento sustentável do seu negócio."
      />

      {/* Governança de TI Section */}
      <section id="governanca" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Governança de TI</h2>
              <p className="text-lg text-gray-600 mb-4">
                A governança de TI não precisa ser burocrática ou restritiva. Na FACTI Solutions, desenvolvemos
                estruturas de governança que equilibram controle e agilidade, criando um ambiente seguro onde a inovação
                pode florescer.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossas políticas são claras, práticas e alinhadas aos objetivos de negócio, garantindo que a tecnologia
                seja um facilitador e não um obstáculo ao crescimento da sua empresa.
              </p>

              <div className="space-y-3 mb-8">
                <FeatureItem text="Desenvolvimento de políticas e procedimentos" />
                <FeatureItem text="Gerenciamento de acessos e identidades" />
                <FeatureItem text="Preparação para conformidades regulatórias (LGPD, ISO 27001)" />
                <FeatureItem text="Gestão de riscos de TI" />
              </div>
            </div>

            <div className="relative h-[400px]">
              <Image
                src={placeholderImage || "/placeholder.svg"}
                alt="Governança de TI"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Infraestrutura Section */}
      <section id="infraestrutura" className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px]">
              <Image
                src={placeholderImage || "/placeholder.svg"}
                alt="Infraestrutura & Estruturação de Equipe"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Infraestrutura & Estruturação de Equipe</h2>
              <p className="text-lg text-gray-600 mb-4">
                Uma infraestrutura de TI bem estruturada vai além de servidores e redes. Envolve pessoas, processos e
                tecnologias trabalhando em harmonia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Ajudamos a selecionar as ferramentas certas para seu contexto, implementar fluxos de trabalho eficientes
                e otimizar a gestão de fornecedores e licenças, criando um ecossistema tecnológico que suporta suas
                operações atuais e futuras ambições.
              </p>

              <div className="space-y-3 mb-8">
                <FeatureItem text="Consultoria na seleção de ferramentas e tecnologias" />
                <FeatureItem text="Implementação de fluxos de trabalho para onboarding/offboarding" />
                <FeatureItem text="Gestão estratégica de fornecedores e licenças" />
                <FeatureItem text="Estruturação e capacitação de equipes de TI" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA Section */}
      <section id="ia" className="section-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Consultoria em Inteligência Artificial</h2>
            <p className="text-xl mb-4 text-center">
              A inteligência artificial não precisa ser complexa ou inacessível. Nossa abordagem desmistifica a IA,
              focando em aplicações práticas que geram valor imediato para seu negócio.
            </p>
            <p className="text-xl mb-12 text-center">
              Desde treinamentos introdutórios até implementações customizadas, ajudamos sua empresa a adotar IA de
              forma responsável e estratégica, automatizando processos, melhorando decisões e descobrindo oportunidades
              ocultas em seus dados.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Treinamentos em IA</h3>
                <p>
                  Capacitamos suas equipes técnicas e não-técnicas com conhecimentos práticos sobre IA, permitindo que
                  aproveitem ao máximo as ferramentas disponíveis.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Automação Inteligente</h3>
                <p>
                  Implementamos soluções de automação com ChatGPT, RPA e outras ferramentas para otimizar processos e
                  liberar sua equipe para tarefas de maior valor.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Análise Avançada de Dados</h3>
                <p>
                  Transformamos seus dados em insights acionáveis que impulsionam decisões estratégicas e revelam
                  oportunidades ocultas.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Soluções de IA Customizadas</h3>
                <p>
                  Desenvolvemos soluções de IA adaptadas aos desafios específicos do seu negócio, garantindo resultados
                  relevantes e mensuráveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para transformar sua TI?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato para uma consulta inicial gratuita e descubra como podemos ajudar sua empresa a alcançar
              excelência operacional através de governança de TI estruturada e soluções de IA.
            </p>
            <Link href="/contato" className="btn btn-primary">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
