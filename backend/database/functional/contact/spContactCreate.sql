/**
 * @summary
 * Creates a new contact form submission
 *
 * @procedure spContactCreate
 * @schema functional
 * @type stored-procedure
 *
 * @parameters
 * @param {NVARCHAR} name - Contact name
 * @param {NVARCHAR} email - Contact email
 * @param {VARCHAR} phone - Contact phone
 * @param {VARCHAR} interestType - Type of interest
 * @param {INT} idClass - Class of interest (optional)
 * @param {NVARCHAR} message - Contact message
 * @param {BIT} privacyAccepted - Privacy policy acceptance
 *
 * @output {ContactCreated, 1, 1}
 * @column {INT} idContact - Created contact identifier
 */
CREATE OR ALTER PROCEDURE [functional].[spContactCreate]
  @name NVARCHAR(100),
  @email NVARCHAR(100),
  @phone VARCHAR(20),
  @interestType VARCHAR(50),
  @idClass INTEGER = NULL,
  @message NVARCHAR(1000),
  @privacyAccepted BIT
AS
BEGIN
  SET NOCOUNT ON;

  /**
   * @validation Validate required parameters
   */
  IF @name IS NULL OR @name = ''
  BEGIN
    ;THROW 51000, 'nameRequired', 1;
  END;

  IF @email IS NULL OR @email = ''
  BEGIN
    ;THROW 51000, 'emailRequired', 1;
  END;

  IF @phone IS NULL OR @phone = ''
  BEGIN
    ;THROW 51000, 'phoneRequired', 1;
  END;

  IF @message IS NULL OR @message = ''
  BEGIN
    ;THROW 51000, 'messageRequired', 1;
  END;

  IF @privacyAccepted = 0
  BEGIN
    ;THROW 51000, 'privacyAcceptanceRequired', 1;
  END;

  /**
   * @validation Validate class exists if provided
   */
  IF @idClass IS NOT NULL AND NOT EXISTS (SELECT 1 FROM [functional].[class] WHERE [idClass] = @idClass)
  BEGIN
    ;THROW 51000, 'classNotFound', 1;
  END;

  BEGIN TRY
    BEGIN TRAN;

    /**
     * @rule {fn-contact-processing} Insert contact submission
     */
    INSERT INTO [functional].[contact]
    ([name], [email], [phone], [interestType], [idClass], [message], [privacyAccepted])
    VALUES
    (@name, @email, @phone, @interestType, @idClass, @message, @privacyAccepted);

    /**
     * @output {ContactCreated, 1, 1}
     */
    SELECT SCOPE_IDENTITY() AS [idContact];

    COMMIT TRAN;
  END TRY
  BEGIN CATCH
    ROLLBACK TRAN;
    THROW;
  END CATCH;
END;
GO