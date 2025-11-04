/**
 * @summary
 * Lists published blog articles with optional filters
 *
 * @procedure spBlogArticleList
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {INT} idBlogCategory - Category identifier (optional)
 * @param {NVARCHAR} searchTerm - Search term (optional)
 * @param {INT} pageNumber - Page number for pagination
 * @param {INT} pageSize - Page size for pagination
 *
 * @output {BlogArticleList, n, n}
 * @column {INT} idBlogArticle - Article identifier
 * @column {NVARCHAR} title - Article title
 * @column {VARCHAR} slug - Article slug
 * @column {NVARCHAR} summary - Article summary
 * @column {NVARCHAR} featuredImageUrl - Featured image URL
 * @column {NVARCHAR} author - Author name
 * @column {DATETIME2} datePublished - Publication date
 * @column {NVARCHAR} categoryName - Category name
 *
 * @output {TotalCount, 1, 1}
 * @column {INT} totalCount - Total number of articles
 */
CREATE OR ALTER PROCEDURE [functional].[spBlogArticleList]
  @idBlogCategory INTEGER = NULL,
  @searchTerm NVARCHAR(200) = NULL,
  @pageNumber INTEGER = 1,
  @pageSize INTEGER = 10
AS
BEGIN
  SET NOCOUNT ON;

  DECLARE @offset INTEGER = (@pageNumber - 1) * @pageSize;

  /**
   * @output {BlogArticleList, n, n}
   */
  SELECT
    [ba].[idBlogArticle],
    [ba].[title],
    [ba].[slug],
    [ba].[summary],
    [ba].[featuredImageUrl],
    [ba].[author],
    [ba].[datePublished],
    [bc].[name] AS [categoryName]
  FROM [functional].[blogArticle] [ba]
    JOIN [functional].[blogCategory] [bc] ON ([bc].[idBlogCategory] = [ba].[idBlogCategory])
  WHERE [ba].[published] = 1
    AND (@idBlogCategory IS NULL OR [ba].[idBlogCategory] = @idBlogCategory)
    AND (@searchTerm IS NULL OR [ba].[title] LIKE '%' + @searchTerm + '%' OR [ba].[content] LIKE '%' + @searchTerm + '%')
  ORDER BY [ba].[datePublished] DESC
  OFFSET @offset ROWS
  FETCH NEXT @pageSize ROWS ONLY;

  /**
   * @output {TotalCount, 1, 1}
   */
  SELECT COUNT(*) AS [totalCount]
  FROM [functional].[blogArticle] [ba]
  WHERE [ba].[published] = 1
    AND (@idBlogCategory IS NULL OR [ba].[idBlogCategory] = @idBlogCategory)
    AND (@searchTerm IS NULL OR [ba].[title] LIKE '%' + @searchTerm + '%' OR [ba].[content] LIKE '%' + @searchTerm + '%');
END;
GO