/**
 * @page AboutPage
 * @summary About page with school information
 * @domain public
 * @type content-page
 * @category public
 */

export const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Sobre Nós</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          Bem-vindo à nossa escola de inglês! Estamos comprometidos em fornecer educação de
          qualidade com metodologia moderna e eficaz.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Nossa História</h2>
        <p className="text-gray-600">
          Fundada com o objetivo de tornar o aprendizado de inglês acessível e eficiente, nossa
          escola tem ajudado centenas de alunos a alcançarem seus objetivos linguísticos.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Nossos Valores</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Excelência no ensino</li>
          <li>Atenção personalizada</li>
          <li>Metodologia comprovada</li>
          <li>Ambiente acolhedor</li>
          <li>Resultados mensuráveis</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
