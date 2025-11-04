/**
 * @summary
 * Lists page content by page key
 *
 * @procedure spPageContentList
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {VARCHAR} pageKey - Page identifier
 *
 * @output {PageContentList, n, n}
 * @column {INT} idPageContent - Content identifier
 * @column {VARCHAR} pageKey - Page identifier
 * @column {VARCHAR} contentKey - Content key
 * @column {NVARCHAR} contentValue - Content value
 * @column {VARCHAR} contentType - Content type
 * @column {INT} displayOrder - Display order
 */
CREATE OR ALTER PROCEDURE [functional].[spPageContentList]
  @pageKey VARCHAR(50)
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @validation Validate required parameters
   * @throw {pageKeyRequired}
   */
  IF @pageKey IS NULL OR @pageKey = ''
  BEGIN
    ;THROW 51000, 'pageKeyRequired', 1;
  END;

  /**
   * @output {PageContentList, n, n}
   */
  SELECT
    [pc].[idPageContent],
    [pc].[pageKey],
    [pc].[contentKey],
    [pc].[contentValue],
    [pc].[contentType],
    [pc].[displayOrder]
  FROM [functional].[pageContent] [pc]
  WHERE [pc].[pageKey] = @pageKey
    AND [pc].[active] = 1
  ORDER BY [pc].[displayOrder];
END;
GO