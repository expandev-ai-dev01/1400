/**
 * @load pageContent
 */
INSERT INTO [functional].[pageContent]
([pageKey], [contentKey], [contentValue], [contentType], [displayOrder], [active])
VALUES
('home', 'banner_title', 'Aprenda Inglês com Excelência', 'text', 1, 1),
('home', 'banner_subtitle', 'Metodologia comprovada e professores qualificados', 'text', 2, 1),
('about', 'history', 'Nossa escola foi fundada em 2010 com o objetivo de proporcionar ensino de inglês de qualidade...', 'richtext', 1, 1),
('about', 'mission', 'Proporcionar educação de excelência em língua inglesa', 'text', 2, 1),
('about', 'vision', 'Ser referência em ensino de inglês na região', 'text', 3, 1),
('about', 'values', 'Excelência, Comprometimento, Inovação', 'text', 4, 1),
('methodology', 'approach', 'Nossa metodologia é baseada em comunicação prática e imersão cultural...', 'richtext', 1, 1);
GO

/**
 * @load galleryCategory
 */
INSERT INTO [functional].[galleryCategory]
([name], [description], [displayOrder])
VALUES
('Instalações', 'Fotos das nossas instalações modernas', 1),
('Eventos', 'Eventos e atividades realizadas', 2),
('Aulas', 'Momentos das nossas aulas', 3);
GO

/**
 * @load faqCategory
 */
INSERT INTO [functional].[faqCategory]
([name], [iconName], [displayOrder])
VALUES
('Matrícula', 'enrollment', 1),
('Metodologia', 'teaching', 2),
('Pagamentos', 'payment', 3);
GO

/**
 * @load blogCategory
 */
INSERT INTO [functional].[blogCategory]
([name], [description], [slug])
VALUES
('Dicas de Estudo', 'Dicas para melhorar seu aprendizado', 'dicas-estudo'),
('Cultura', 'Aspectos culturais da língua inglesa', 'cultura'),
('Gramática', 'Explicações sobre gramática inglesa', 'gramatica');
GO