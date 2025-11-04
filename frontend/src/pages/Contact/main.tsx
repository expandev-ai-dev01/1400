/**
 * @page ContactPage
 * @summary Contact page with form
 * @domain public
 * @type form-page
 * @category public
 */

import { Button } from '@/core/components';

export const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Entre em Contato</h1>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Informações de Contato</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Endereço</h3>
              <p className="text-gray-600">Rua Exemplo, 123 - Centro</p>
              <p className="text-gray-600">São Paulo - SP, 01234-567</p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Telefone</h3>
              <p className="text-gray-600">(11) 1234-5678</p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">contato@escolaingles.com</p>
            </div>

            <div>
              <h3 className="mb-1 font-semibold text-gray-900">Horário de Atendimento</h3>
              <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
              <p className="text-gray-600">Sábado: 9h às 13h</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">Envie uma Mensagem</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
            </div>

            <Button type="submit" fullWidth>
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
