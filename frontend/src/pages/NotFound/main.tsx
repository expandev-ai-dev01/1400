/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type error-page
 * @category error
 */

import { Link } from 'react-router-dom';
import { Button } from '@/core/components';

export const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
      <h2 className="mb-4 text-2xl font-semibold text-gray-700">Página não encontrada</h2>
      <p className="mb-8 text-gray-600">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/">
        <Button>Voltar para a Página Inicial</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
