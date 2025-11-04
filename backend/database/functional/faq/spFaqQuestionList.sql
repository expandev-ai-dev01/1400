/**
 * @summary
 * Lists FAQ questions with optional filters
 *
 * @procedure spFaqQuestionList
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {INT} idFaqCategory - Category identifier (optional)
 * @param {NVARCHAR} searchTerm - Search term for questions/answers (optional)
 *
 * @output {FaqQuestionList, n, n}
 * @column {INT} idFaqQuestion - Question identifier
 * @column {INT} idFaqCategory - Category identifier
 * @column {NVARCHAR} categoryName - Category name
 * @column {NVARCHAR} question - Question text
 * @column {NVARCHAR} answer - Answer text
 * @column {INT} viewCount - View count
 */
CREATE OR ALTER PROCEDURE [functional].[spFaqQuestionList]
  @idFaqCategory INTEGER = NULL,
  @searchTerm NVARCHAR(200) = NULL
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {FaqQuestionList, n, n}
   */
  SELECT
    [fq].[idFaqQuestion],
    [fq].[idFaqCategory],
    [fc].[name] AS [categoryName],
    [fq].[question],
    [fq].[answer],
    [fq].[viewCount]
  FROM [functional].[faqQuestion] [fq]
    JOIN [functional].[faqCategory] [fc] ON ([fc].[idFaqCategory] = [fq].[idFaqCategory])
  WHERE (@idFaqCategory IS NULL OR [fq].[idFaqCategory] = @idFaqCategory)
    AND (@searchTerm IS NULL OR [fq].[question] LIKE '%' + @searchTerm + '%' OR [fq].[answer] LIKE '%' + @searchTerm + '%')
  ORDER BY [fq].[displayOrder], [fq].[viewCount] DESC;
END;
GO