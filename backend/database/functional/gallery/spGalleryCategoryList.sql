/**
 * @summary
 * Lists all gallery categories
 *
 * @procedure spGalleryCategoryList
 * @schema functional
 * @type stored-procedure
 *
 * @output {GalleryCategoryList, n, n}
 * @column {INT} idGalleryCategory - Category identifier
 * @column {NVARCHAR} name - Category name
 * @column {NVARCHAR} description - Category description
 * @column {INT} photoCount - Number of photos in category
 */
CREATE OR ALTER PROCEDURE [functional].[spGalleryCategoryList]
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {GalleryCategoryList, n, n}
   */
  SELECT
    [gc].[idGalleryCategory],
    [gc].[name],
    [gc].[description],
    COUNT([gp].[idGalleryPhoto]) AS [photoCount]
  FROM [functional].[galleryCategory] [gc]
    LEFT JOIN [functional].[galleryPhoto] [gp] ON ([gp].[idGalleryCategory] = [gc].[idGalleryCategory])
  GROUP BY [gc].[idGalleryCategory], [gc].[name], [gc].[description], [gc].[displayOrder]
  ORDER BY [gc].[displayOrder];
END;
GO