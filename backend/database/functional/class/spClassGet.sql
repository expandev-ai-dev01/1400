/**
 * @summary
 * Gets detailed class information
 *
 * @procedure spClassGet
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {INT} idClass - Class identifier
 *
 * @output {ClassDetail, 1, n}
 * @column {INT} idClass - Class identifier
 * @column {NVARCHAR} name - Class name
 * @column {VARCHAR} level - Class level
 * @column {VARCHAR} targetAudience - Target audience
 * @column {NVARCHAR} schedule - Class schedule
 * @column {NVARCHAR} weekDays - Week days
 * @column {NUMERIC} price - Class price
 * @column {INT} availableSlots - Available slots
 * @column {INT} totalSlots - Total slots
 * @column {NVARCHAR} description - Class description
 * @column {NVARCHAR} syllabus - Class syllabus
 * @column {NVARCHAR} duration - Class duration
 * @column {NVARCHAR} materials - Required materials
 */
CREATE OR ALTER PROCEDURE [functional].[spClassGet]
  @idClass INTEGER
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @validation Validate required parameters
   * @throw {idClassRequired}
   */
  IF @idClass IS NULL
  BEGIN
    ;THROW 51000, 'idClassRequired', 1;
  END;

  /**
   * @validation Validate class exists
   * @throw {classNotFound}
   */
  IF NOT EXISTS (SELECT 1 FROM [functional].[class] WHERE [idClass] = @idClass AND [deleted] = 0)
  BEGIN
    ;THROW 51000, 'classNotFound', 1;
  END;

  /**
   * @output {ClassDetail, 1, n}
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
    [cls].[description],
    [cls].[syllabus],
    [cls].[duration],
    [cls].[materials]
  FROM [functional].[class] [cls]
  WHERE [cls].[idClass] = @idClass
    AND [cls].[deleted] = 0;
END;
GO