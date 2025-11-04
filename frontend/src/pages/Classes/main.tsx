/**
 * @page ClassesPage
 * @summary Classes listing page
 * @domain public
 * @type list-page
 * @category public
 */

export const ClassesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Nossas Turmas</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Básico</h3>
          <p className="mb-4 text-gray-600">Para iniciantes sem conhecimento prévio</p>
          <ul className="mb-4 space-y-2 text-sm text-gray-600">
            <li>• Duração: 6 meses</li>
            <li>• Aulas: 2x por semana</li>
            <li>• Horários: Manhã e Noite</li>
          </ul>
          <p className="text-lg font-semibold text-primary-600">R$ 350/mês</p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Intermediário</h3>
          <p className="mb-4 text-gray-600">Para alunos com conhecimento básico</p>
          <ul className="mb-4 space-y-2 text-sm text-gray-600">
            <li>• Duração: 8 meses</li>
            <li>• Aulas: 2x por semana</li>
            <li>• Horários: Tarde e Noite</li>
          </ul>
          <p className="text-lg font-semibold text-primary-600">R$ 400/mês</p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-900">Avançado</h3>
          <p className="mb-4 text-gray-600">Para alunos com fluência intermediária</p>
          <ul className="mb-4 space-y-2 text-sm text-gray-600">
            <li>• Duração: 10 meses</li>
            <li>• Aulas: 2x por semana</li>
            <li>• Horários: Noite</li>
          </ul>
          <p className="text-lg font-semibold text-primary-600">R$ 450/mês</p>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
