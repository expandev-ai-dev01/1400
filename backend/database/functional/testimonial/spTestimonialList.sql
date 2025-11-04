/**
 * @summary
 * Lists approved testimonials with optional filters
 *
 * @procedure spTestimonialList
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {VARCHAR} courseLevel - Course level filter (optional)
 * @param {BIT} featuredOnly - Return only featured testimonials (optional)
 * @param {INT} pageNumber - Page number for pagination
 * @param {INT} pageSize - Page size for pagination
 *
 * @output {TestimonialList, n, n}
 * @column {INT} idTestimonial - Testimonial identifier
 * @column {NVARCHAR} studentName - Student name
 * @column {NVARCHAR} photoUrl - Photo URL
 * @column {NVARCHAR} testimonialText - Testimonial text
 * @column {INT} rating - Rating (1-5)
 * @column {VARCHAR} courseLevel - Course level
 * @column {DATETIME2} dateCreated - Creation date
 *
 * @output {TotalCount, 1, 1}
 * @column {INT} totalCount - Total number of testimonials
 */
CREATE OR ALTER PROCEDURE [functional].[spTestimonialList]
  @courseLevel VARCHAR(20) = NULL,
  @featuredOnly BIT = 0,
  @pageNumber INTEGER = 1,
  @pageSize INTEGER = 6
AS
BEGIN
  SET NOCOUNT ON;

  DECLARE @offset INTEGER = (@pageNumber - 1) * @pageSize;

  /**
   * @output {TestimonialList, n, n}
   */
  SELECT
    [tst].[idTestimonial],
    [tst].[studentName],
    [tst].[photoUrl],
    [tst].[testimonialText],
    [tst].[rating],
    [tst].[courseLevel],
    [tst].[dateCreated]
  FROM [functional].[testimonial] [tst]
  WHERE [tst].[approved] = 1
    AND (@courseLevel IS NULL OR [tst].[courseLevel] = @courseLevel)
    AND (@featuredOnly = 0 OR [tst].[featured] = 1)
  ORDER BY [tst].[dateCreated] DESC
  OFFSET @offset ROWS
  FETCH NEXT @pageSize ROWS ONLY;

  /**
   * @output {TotalCount, 1, 1}
   */
  SELECT COUNT(*) AS [totalCount]
  FROM [functional].[testimonial] [tst]
  WHERE [tst].[approved] = 1
    AND (@courseLevel IS NULL OR [tst].[courseLevel] = @courseLevel)
    AND (@featuredOnly = 0 OR [tst].[featured] = 1);
END;
GO