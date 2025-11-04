/**
 * @summary
 * Lists all FAQ categories
 *
 * @procedure spFaqCategoryList
 * @schema functional
 * @type stored-procedure
 *
 * @output {FaqCategoryList, n, n}
 * @column {INT} idFaqCategory - Category identifier
 * @column {NVARCHAR} name - Category name
 * @column {VARCHAR} iconName - Icon name
 * @column {INT} questionCount - Number of questions in category
 */
CREATE OR ALTER PROCEDURE [functional].[spFaqCategoryList]
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {FaqCategoryList, n, n}
   */
  SELECT
    [fc].[idFaqCategory],
    [fc].[name],
    [fc].[iconName],
    COUNT([fq].[idFaqQuestion]) AS [questionCount]
  FROM [functional].[faqCategory] [fc]
    LEFT JOIN [functional].[faqQuestion] [fq] ON ([fq].[idFaqCategory] = [fc].[idFaqCategory])
  GROUP BY [fc].[idFaqCategory], [fc].[name], [fc].[iconName], [fc].[displayOrder]
  ORDER BY [fc].[displayOrder];
END;
GO