/**
 * @page MethodologyPage
 * @summary Methodology information page
 * @domain public
 * @type content-page
 * @category public
 */

export const MethodologyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Nossa Metodologia</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600">
          Nossa metodologia é baseada na abordagem comunicativa, priorizando a prática real do
          idioma em situações cotidianas.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">Pilares do Ensino</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Conversação</h3>
            <p className="text-gray-600">
              Prática intensiva de conversação desde o primeiro dia, desenvolvendo fluência e
              confiança.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Gramática Contextualizada</h3>
            <p className="text-gray-600">
              Estudo da gramática sempre aplicado a situações reais de comunicação.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Imersão Cultural</h3>
            <p className="text-gray-600">
              Exposição à cultura dos países de língua inglesa através de materiais autênticos.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Tecnologia</h3>
            <p className="text-gray-600">
              Uso de recursos tecnológicos modernos para potencializar o aprendizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyPage;
