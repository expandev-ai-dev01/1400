/**
 * @summary
 * Type definitions for content service
 *
 * @module services/content/contentTypes
 */

export interface PageContent {
  idPageContent: number;
  pageKey: string;
  contentKey: string;
  contentValue: string;
  contentType: string;
  displayOrder: number;
}

export interface PageContentListRequest {
  pageKey: string;
}
