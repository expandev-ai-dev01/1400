/**
 * @summary
 * Creates a new blog comment
 *
 * @procedure spBlogCommentCreate
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {INT} idBlogArticle - Article identifier
 * @param {NVARCHAR} name - Commenter name
 * @param {NVARCHAR} email - Commenter email
 * @param {NVARCHAR} commentText - Comment text
 *
 * @output {CommentCreated, 1, 1}
 * @column {INT} idBlogComment - Created comment identifier
 */
CREATE OR ALTER PROCEDURE [functional].[spBlogCommentCreate]
  @idBlogArticle INTEGER,
  @name NVARCHAR(100),
  @email NVARCHAR(100),
  @commentText NVARCHAR(1000)
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @validation Validate required parameters
   */
  IF @idBlogArticle IS NULL
  BEGIN
    ;THROW 51000, 'idBlogArticleRequired', 1;
  END;

  IF @name IS NULL OR @name = ''
  BEGIN
    ;THROW 51000, 'nameRequired', 1;
  END;

  IF @email IS NULL OR @email = ''
  BEGIN
    ;THROW 51000, 'emailRequired', 1;
  END;

  IF @commentText IS NULL OR @commentText = ''
  BEGIN
    ;THROW 51000, 'commentTextRequired', 1;
  END;

  /**
   * @validation Validate article exists
   */
  IF NOT EXISTS (SELECT 1 FROM [functional].[blogArticle] WHERE [idBlogArticle] = @idBlogArticle AND [published] = 1)
  BEGIN
    ;THROW 51000, 'articleNotFound', 1;
  END;

  BEGIN TRY
    BEGIN TRAN;

    /**
     * @rule {fn-blog-comment-moderation} Insert comment for moderation
     */
    INSERT INTO [functional].[blogComment]
    ([idBlogArticle], [name], [email], [commentText])
    VALUES
    (@idBlogArticle, @name, @email, @commentText);

    /**
     * @output {CommentCreated, 1, 1}
     */
    SELECT SCOPE_IDENTITY() AS [idBlogComment];

    COMMIT TRAN;
  END TRY
  BEGIN CATCH
    ROLLBACK TRAN;
    THROW;
  END CATCH;
END;
GO