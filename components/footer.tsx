import Link from "next/link"
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
// Import the Logo component
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* Use the Logo component with white text color and animation */}
            <div className="mb-4">
              <Logo variant="full" size="lg" textColor="text-white" animated={true} />
            </div>
            <p className="text-gray-400 mb-6">
              Transformando departamentos de TI reativos em ativos estratégicos para pequenas e médias empresas no
              Brasil.
            </p>

            <div className="flex space-x-4">
              <a
                href="http://linkedin.com/company/facti-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://wa.me/551151966199"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/facti.solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos#governanca" className="text-gray-400 hover:text-white transition-colors">
                  Governança de TI
                </Link>
              </li>
              <li>
                <Link href="/servicos#infraestrutura" className="text-gray-400 hover:text-white transition-colors">
                  Infraestrutura & Equipe
                </Link>
              </li>
              <li>
                <Link href="/servicos#ia" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria em IA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-400">contactus@facti.solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-400">+55 11 5196-6199</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-gray-400">Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; 2025 FACTI Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
