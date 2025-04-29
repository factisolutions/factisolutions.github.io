import HeroSection from "@/components/hero-section"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import SectionHeader from "@/components/section-header"

export const metadata = {
  title: "Contato | FACTI Solutions",
  description:
    "Entre em contato com a FACTI Solutions para consultoria em governança de TI, infraestrutura e implementação de IA para seu negócio.",
}

export default function ContatoPage() {
  return (
    <>
      <HeroSection
        title="Entre em Contato"
        subtitle="Estamos prontos para ajudar sua empresa a transformar TI em vantagem competitiva. Preencha o formulário abaixo ou utilize um de nossos canais de contato."
      />

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeader
            title="Perguntas Frequentes"
            subtitle="Respostas para algumas das perguntas mais comuns sobre nossos serviços."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Como funciona o processo de consultoria?</h3>
              <p className="text-gray-600">
                Nosso processo começa com uma consulta inicial gratuita para entender suas necessidades. Em seguida,
                realizamos um diagnóstico detalhado da sua infraestrutura atual e desenvolvemos um plano personalizado.
                Após sua aprovação, implementamos as soluções recomendadas e fornecemos suporte contínuo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Quanto tempo leva para implementar as soluções?</h3>
              <p className="text-gray-600">
                O tempo de implementação varia de acordo com a complexidade do projeto e o tamanho da sua organização.
                Projetos de governança de TI geralmente levam de 1 a 3 meses, enquanto implementações de IA podem variar
                de 2 a 6 meses. Durante a consulta inicial, forneceremos um cronograma detalhado para seu caso
                específico.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Quais são os custos envolvidos?</h3>
              <p className="text-gray-600">
                Trabalhamos com diferentes modelos de precificação, incluindo projetos pontuais, pacotes de serviços e
                contratos de retainer. Os valores são personalizados de acordo com o escopo do trabalho e as
                necessidades específicas da sua empresa. Garantimos transparência total nos custos desde o início do
                processo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Minha empresa é pequena demais para implementar IA?</h3>
              <p className="text-gray-600">
                Não! Acreditamos que empresas de todos os tamanhos podem se beneficiar da IA. Desenvolvemos soluções
                escaláveis que se adaptam ao seu orçamento e necessidades específicas. Começamos com implementações
                simples que geram valor imediato e evoluímos gradualmente conforme sua maturidade tecnológica aumenta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
