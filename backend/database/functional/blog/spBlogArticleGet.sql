/**
 * @summary
 * Gets detailed blog article information
 *
 * @procedure spBlogArticleGet
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {VARCHAR} slug - Article slug
 *
 * @output {BlogArticleDetail, 1, n}
 * @column {INT} idBlogArticle - Article identifier
 * @column {NVARCHAR} title - Article title
 * @column {VARCHAR} slug - Article slug
 * @column {NVARCHAR} summary - Article summary
 * @column {NVARCHAR} content - Article content
 * @column {NVARCHAR} featuredImageUrl - Featured image URL
 * @column {NVARCHAR} author - Author name
 * @column {DATETIME2} datePublished - Publication date
 * @column {NVARCHAR} categoryName - Category name
 */
CREATE OR ALTER PROCEDURE [functional].[spBlogArticleGet]
  @slug VARCHAR(200)
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @validation Validate required parameters
   */
  IF @slug IS NULL OR @slug = ''
  BEGIN
    ;THROW 51000, 'slugRequired', 1;
  END;

  /**
   * @validation Validate article exists
   */
  IF NOT EXISTS (SELECT 1 FROM [functional].[blogArticle] WHERE [slug] = @slug AND [published] = 1)
  BEGIN
    ;THROW 51000, 'articleNotFound', 1;
  END;

  /**
   * @output {BlogArticleDetail, 1, n}
   */
  SELECT
    [ba].[idBlogArticle],
    [ba].[title],
    [ba].[slug],
    [ba].[summary],
    [ba].[content],
    [ba].[featuredImageUrl],
    [ba].[author],
    [ba].[datePublished],
    [bc].[name] AS [categoryName]
  FROM [functional].[blogArticle] [ba]
    JOIN [functional].[blogCategory] [bc] ON ([bc].[idBlogCategory] = [ba].[idBlogCategory])
  WHERE [ba].[slug] = @slug
    AND [ba].[published] = 1;
END;
GO