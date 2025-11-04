/**
 * @summary
 * Lists classes with optional filters
 *
 * @procedure spClassList
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {VARCHAR} level - Class level filter (optional)
 * @param {VARCHAR} targetAudience - Target audience filter (optional)
 * @param {VARCHAR} schedule - Schedule filter (optional)
 *
 * @output {ClassList, n, n}
 * @column {INT} idClass - Class identifier
 * @column {NVARCHAR} name - Class name
 * @column {VARCHAR} level - Class level
 * @column {VARCHAR} targetAudience - Target audience
 * @column {NVARCHAR} schedule - Class schedule
 * @column {NVARCHAR} weekDays - Week days
 * @column {NUMERIC} price - Class price
 * @column {INT} availableSlots - Available slots
 * @column {INT} totalSlots - Total slots
 * @column {BIT} isNew - Is new class (published in last 15 days)
 * @column {BIT} hasLimitedSlots - Has limited slots (less than 3)
 */
CREATE OR ALTER PROCEDURE [functional].[spClassList]
  @level VARCHAR(20) = NULL,
  @targetAudience VARCHAR(20) = NULL,
  @schedule VARCHAR(20) = NULL
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {ClassList, n, n}
   */
  SELECT
    [cls].[idClass],
    [cls].[name],
    [cls].[level],
    [cls].[targetAudience],
    [cls].[schedule],
    [cls].[weekDays],
    [cls].[price],
    [cls].[availableSlots],
    [cls].[totalSlots],
    CASE WHEN DATEDIFF(DAY, [cls].[dateCreated], GETUTCDATE()) <= 15 THEN 1 ELSE 0 END AS [isNew],
    CASE WHEN [cls].[availableSlots] < 3 AND [cls].[availableSlots] > 0 THEN 1 ELSE 0 END AS [hasLimitedSlots]
  FROM [functional].[class] [cls]
  WHERE [cls].[active] = 1
    AND [cls].[deleted] = 0
    AND (@level IS NULL OR [cls].[level] = @level)
    AND (@targetAudience IS NULL OR [cls].[targetAudience] = @targetAudience)
    AND (@schedule IS NULL OR [cls].[schedule] LIKE '%' + @schedule + '%')
  ORDER BY [cls].[displayOrder], [cls].[name];
END;
GO