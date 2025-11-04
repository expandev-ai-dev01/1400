/**
 * @summary
 * Lists gallery photos by category
 *
 * @procedure spGalleryPhotoList
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {INT} idGalleryCategory - Category identifier (optional)
 *
 * @output {GalleryPhotoList, n, n}
 * @column {INT} idGalleryPhoto - Photo identifier
 * @column {INT} idGalleryCategory - Category identifier
 * @column {NVARCHAR} categoryName - Category name
 * @column {NVARCHAR} title - Photo title
 * @column {NVARCHAR} description - Photo description
 * @column {NVARCHAR} photoUrl - Photo URL
 */
CREATE OR ALTER PROCEDURE [functional].[spGalleryPhotoList]
  @idGalleryCategory INTEGER = NULL
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @output {GalleryPhotoList, n, n}
   */
  SELECT
    [gp].[idGalleryPhoto],
    [gp].[idGalleryCategory],
    [gc].[name] AS [categoryName],
    [gp].[title],
    [gp].[description],
    [gp].[photoUrl]
  FROM [functional].[galleryPhoto] [gp]
    JOIN [functional].[galleryCategory] [gc] ON ([gc].[idGalleryCategory] = [gp].[idGalleryCategory])
  WHERE (@idGalleryCategory IS NULL OR [gp].[idGalleryCategory] = @idGalleryCategory)
  ORDER BY [gp].[displayOrder], [gp].[dateCreated] DESC;
END;
GO