/**
 * @summary
 * Content business logic (in-memory implementation)
 *
 * @module services/content/contentLogic
 */

import { PageContent, PageContentListRequest } from './contentTypes';

/**
 * @remarks
 * In-memory storage for page content
 */
const pageContentStore: PageContent[] = [
  {
    idPageContent: 1,
    pageKey: 'home',
    contentKey: 'banner_title',
    contentValue: 'Aprenda Inglês com Excelência',
    contentType: 'text',
    displayOrder: 1,
  },
  {
    idPageContent: 2,
    pageKey: 'home',
    contentKey: 'banner_subtitle',
    contentValue: 'Metodologia comprovada e professores qualificados',
    contentType: 'text',
    displayOrder: 2,
  },
  {
    idPageContent: 3,
    pageKey: 'about',
    contentKey: 'history',
    contentValue:
      'Nossa escola foi fundada em 2010 com o objetivo de proporcionar ensino de inglês de qualidade...',
    contentType: 'richtext',
    displayOrder: 1,
  },
  {
    idPageContent: 4,
    pageKey: 'about',
    contentKey: 'mission',
    contentValue: 'Proporcionar educação de excelência em língua inglesa',
    contentType: 'text',
    displayOrder: 2,
  },
  {
    idPageContent: 5,
    pageKey: 'about',
    contentKey: 'vision',
    contentValue: 'Ser referência em ensino de inglês na região',
    contentType: 'text',
    displayOrder: 3,
  },
  {
    idPageContent: 6,
    pageKey: 'about',
    contentKey: 'values',
    contentValue: 'Excelência, Comprometimento, Inovação',
    contentType: 'text',
    displayOrder: 4,
  },
  {
    idPageContent: 7,
    pageKey: 'methodology',
    contentKey: 'approach',
    contentValue: 'Nossa metodologia é baseada em comunicação prática e imersão cultural...',
    contentType: 'richtext',
    displayOrder: 1,
  },
];

/**
 * @summary
 * Lists page content by page key
 *
 * @function pageContentList
 * @module services/content/contentLogic
 *
 * @param {PageContentListRequest} params - Request parameters
 *
 * @returns {Promise<PageContent[]>} List of page content
 */
export async function pageContentList(params: PageContentListRequest): Promise<PageContent[]> {
  const { pageKey } = params;

  return pageContentStore
    .filter((content) => content.pageKey === pageKey)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
