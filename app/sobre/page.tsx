import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import FeatureItem from "@/components/feature-item"
import { Target, Eye, Heart } from "lucide-react"

export const metadata = {
  title: "Sobre Nós | FACTI Solutions",
  description:
    "Conheça a FACTI Solutions, consultoria especializada em governança de TI, infraestrutura e implementação de IA para pequenas e médias empresas no Brasil.",
}

export default function SobrePage() {
  // Define a placeholder image for fallback
  const placeholderImage = "/strategic-growth.png"

  return (
    <>
      <HeroSection
        title="Sobre Nós"
        subtitle="Conheça a FACTI Solutions e nossa missão de transformar departamentos de TI em ativos estratégicos para pequenas e médias empresas."
      />

      {/* About Company Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src={placeholderImage || "/placeholder.svg"}
                alt="FACTI Solutions História"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-4">
                A FACTI Solutions nasceu da percepção de que pequenas e médias empresas frequentemente enfrentam
                desafios de TI semelhantes aos de grandes corporações, mas sem acesso aos mesmos recursos e expertise.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Fundada por um profissional com vasta experiência em governança de TI e infraestrutura, nossa
                consultoria preenche essa lacuna, oferecendo serviços especializados que transformam departamentos
                tecnológicos de centros de custo em impulsionadores estratégicos de negócios.
              </p>
              <p className="text-lg text-gray-600">
                Diferentemente de consultorias tradicionais que oferecem soluções genéricas, desenvolvemos estratégias
                personalizadas que respeitam a maturidade, cultura e objetivos específicos de cada organização. Nosso
                método combina as melhores práticas do mercado com uma abordagem pragmática, garantindo implementações
                bem-sucedidas e resultados tangíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Missão, Visão e Valores</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Target size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Missão</h3>
              <p className="text-gray-600">
                Capacitar empresas a alcançarem excelência operacional através de governança de TI estruturada e
                infraestrutura otimizada, fornecendo soluções personalizadas que equilibram segurança, eficiência e
                inovação para impulsionar o crescimento sustentável dos negócios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Eye size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a principal consultoria de TI no Brasil para pequenas e médias empresas,
                transformando a governança e infraestrutura de TI em vantagens competitivas sustentáveis, e expandir
                globalmente como referência em soluções de IA aplicadas a negócios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Heart size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Valores</h3>
              <div className="text-gray-600">
                <p className="mb-2">
                  <strong>Excelência Técnica:</strong> Comprometimento com os mais altos padrões de qualidade.
                </p>
                <p className="mb-2">
                  <strong>Integridade:</strong> Transparência e honestidade em todos os relacionamentos.
                </p>
                <p className="mb-2">
                  <strong>Pragmatismo:</strong> Foco em soluções práticas e resultados tangíveis.
                </p>
                <p className="mb-2">
                  <strong>Personalização:</strong> Soluções customizadas para cada cliente.
                </p>
                <p>
                  <strong>Inovação Responsável:</strong> Adoção de novas tecnologias com segurança e sustentabilidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nosso Fundador</h2>
              <p className="text-lg text-gray-600 mb-4">
                A FACTI Solutions foi fundada por um profissional com mais de 15 anos de experiência em TI,
                especializado em governança, infraestrutura e implementação de novas tecnologias.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Com passagens por empresas de diversos portes e setores, nosso fundador identificou a necessidade de uma
                abordagem mais personalizada e pragmática para pequenas e médias empresas, que frequentemente não
                conseguem aproveitar todo o potencial estratégico da tecnologia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Combinando profundo conhecimento técnico com visão estratégica de negócios, ele criou a FACTI Solutions
                para oferecer consultoria de alto nível que realmente entende os desafios específicos das PMEs
                brasileiras e as ajuda a transformar TI em vantagem competitiva.
              </p>

              <div className="space-y-3">
                <FeatureItem text="Especialista em Governança de TI" />
                <FeatureItem text="Certificações em ITIL, COBIT e ISO 27001" />
                <FeatureItem text="Experiência em implementação de IA em negócios" />
                <FeatureItem text="Palestrante e consultor de referência no mercado" />
              </div>
            </div>

            <div className="relative h-[400px]">
              <Image
                src={placeholderImage || "/placeholder.svg"}
                alt="Fundador da FACTI Solutions"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Nossos Diferenciais</h2>
            <p className="text-xl mb-12 text-center">
              O que nos diferencia no mercado de consultoria de TI e nos torna a escolha certa para o seu negócio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Abordagem Pragmática</h3>
                <p>
                  Focamos em soluções viáveis e resultados tangíveis, evitando complexidades desnecessárias e garantindo
                  que cada recomendação seja aplicável à sua realidade.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Personalização Real</h3>
                <p>
                  Cada solução é desenvolvida considerando o contexto único da sua organização, respeitando sua cultura,
                  maturidade tecnológica e objetivos de negócio.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Independência de Fornecedores</h3>
                <p>
                  Recomendamos as melhores ferramentas para cada caso, sem compromissos com vendedores específicos,
                  garantindo que você obtenha a solução ideal para suas necessidades.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Transferência de Conhecimento</h3>
                <p>
                  Capacitamos suas equipes para manter e evoluir as soluções implementadas, garantindo autonomia e
                  sustentabilidade a longo prazo.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos trabalhar juntos?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato para uma consulta inicial gratuita e descubra como podemos ajudar sua empresa a
              transformar TI em vantagem competitiva.
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
