/**
 * @page HomePage
 * @summary Home page with welcome content
 * @domain public
 * @type landing-page
 * @category public
 */

import { Link } from 'react-router-dom';
import { Button } from '@/core/components';

export const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Aprenda Inglês com Excelência
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Metodologia moderna e eficaz para todos os níveis
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link to="/turmas">
            <Button size="lg" fullWidth>
              Ver Turmas Disponíveis
            </Button>
          </Link>
          <Link to="/contato">
            <Button variant="secondary" size="lg" fullWidth>
              Entre em Contato
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
            <svg
              className="h-6 w-6 text-primary-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Metodologia Comprovada</h3>
          <p className="text-gray-600">
            Abordagem comunicativa que prioriza a prática real do idioma
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
            <svg
              className="h-6 w-6 text-primary-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Turmas Reduzidas</h3>
          <p className="text-gray-600">Grupos pequenos para garantir atenção personalizada</p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
            <svg
              className="h-6 w-6 text-primary-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Certificação Internacional</h3>
          <p className="text-gray-600">
            Preparação para exames de proficiência reconhecidos mundialmente
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
