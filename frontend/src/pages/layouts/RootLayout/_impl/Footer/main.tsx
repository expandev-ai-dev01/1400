/**
 * @component Footer
 * @summary Main footer component
 * @domain core
 * @type layout-component
 * @category layout
 */

import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Escola de Inglês</h3>
            <p className="text-sm text-gray-600">
              Aprenda inglês com metodologia moderna e eficaz.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-primary-600">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/turmas" className="text-gray-600 hover:text-primary-600">
                  Turmas
                </Link>
              </li>
              <li>
                <Link to="/metodologia" className="text-gray-600 hover:text-primary-600">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-primary-600">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: contato@escolaingles.com</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Endereço: Rua Exemplo, 123</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Escola de Inglês. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
