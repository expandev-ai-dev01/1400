/**
 * @schema functional
 * Business entity schema for institutional content
 */
CREATE SCHEMA [functional];
GO

/**
 * @table pageContent Stores dynamic page content
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[pageContent] (
  [idPageContent] INTEGER IDENTITY(1, 1) NOT NULL,
  [pageKey] VARCHAR(50) NOT NULL,
  [contentKey] VARCHAR(100) NOT NULL,
  [contentValue] NVARCHAR(MAX) NOT NULL,
  [contentType] VARCHAR(20) NOT NULL,
  [displayOrder] INTEGER NOT NULL DEFAULT (0),
  [active] BIT NOT NULL DEFAULT (1),
  [dateCreated] DATETIME2 NOT NULL DEFAULT (GETUTCDATE()),
  [dateModified] DATETIME2 NOT NULL DEFAULT (GETUTCDATE())
);
GO

/**
 * @primaryKey pkPageContent
 * @keyType Object
 */
ALTER TABLE [functional].[pageContent]
ADD CONSTRAINT [pkPageContent] PRIMARY KEY CLUSTERED ([idPageContent]);
GO

/**
 * @index ixPageContent_PageKey_ContentKey
 * @type Search
 * @unique true
 */
CREATE UNIQUE NONCLUSTERED INDEX [ixPageContent_PageKey_ContentKey]
ON [functional].[pageContent]([pageKey], [contentKey]);
GO

/**
 * @table class Stores class information
 * @multitenancy false
 * @softDelete true
 */
CREATE TABLE [functional].[class] (
  [idClass] INTEGER IDENTITY(1, 1) NOT NULL,
  [name] NVARCHAR(200) NOT NULL,
  [level] VARCHAR(20) NOT NULL,
  [targetAudience] VARCHAR(20) NOT NULL,
  [schedule] NVARCHAR(200) NOT NULL,
  [weekDays] NVARCHAR(100) NOT NULL,
  [price] NUMERIC(18, 6) NOT NULL,
  [availableSlots] INTEGER NOT NULL,
  [totalSlots] INTEGER NOT NULL,
  [description] NVARCHAR(MAX) NOT NULL,
  [syllabus] NVARCHAR(MAX) NOT NULL,
  [duration] NVARCHAR(100) NOT NULL,
  [materials] NVARCHAR(500) NOT NULL,
  [active] BIT NOT NULL DEFAULT (1),
  [deleted] BIT NOT NULL DEFAULT (0),
  [dateCreated] DATETIME2 NOT NULL DEFAULT (GETUTCDATE()),
  [dateModified] DATETIME2 NOT NULL DEFAULT (GETUTCDATE())
);
GO

/**
 * @primaryKey pkClass
 * @keyType Object
 */
ALTER TABLE [functional].[class]
ADD CONSTRAINT [pkClass] PRIMARY KEY CLUSTERED ([idClass]);
GO

/**
 * @check chkClass_Level
 * @enum {basic} Basic level
 * @enum {intermediate} Intermediate level
 * @enum {advanced} Advanced level
 */
ALTER TABLE [functional].[class]
ADD CONSTRAINT [chkClass_Level] CHECK ([level] IN ('basic', 'intermediate', 'advanced'));
GO

/**
 * @check chkClass_TargetAudience
 * @enum {children} Children
 * @enum {teenagers} Teenagers
 * @enum {adults} Adults
 */
ALTER TABLE [functional].[class]
ADD CONSTRAINT [chkClass_TargetAudience] CHECK ([targetAudience] IN ('children', 'teenagers', 'adults'));
GO

/**
 * @index ixClass_Active_Deleted
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixClass_Active_Deleted]
ON [functional].[class]([active], [deleted]);
GO

/**
 * @table contact Stores contact form submissions
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[contact] (
  [idContact] INTEGER IDENTITY(1, 1) NOT NULL,
  [name] NVARCHAR(100) NOT NULL,
  [email] NVARCHAR(100) NOT NULL,
  [phone] VARCHAR(20) NOT NULL,
  [interestType] VARCHAR(50) NOT NULL,
  [idClass] INTEGER NULL,
  [message] NVARCHAR(1000) NOT NULL,
  [privacyAccepted] BIT NOT NULL,
  [status] VARCHAR(20) NOT NULL DEFAULT ('pending'),
  [dateCreated] DATETIME2 NOT NULL DEFAULT (GETUTCDATE()),
  [dateProcessed] DATETIME2 NULL
);
GO

/**
 * @primaryKey pkContact
 * @keyType Object
 */
ALTER TABLE [functional].[contact]
ADD CONSTRAINT [pkContact] PRIMARY KEY CLUSTERED ([idContact]);
GO

/**
 * @foreignKey fkContact_Class
 * @target functional.class
 */
ALTER TABLE [functional].[contact]
ADD CONSTRAINT [fkContact_Class] FOREIGN KEY ([idClass])
REFERENCES [functional].[class]([idClass]);
GO

/**
 * @index ixContact_Status_DateCreated
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixContact_Status_DateCreated]
ON [functional].[contact]([status], [dateCreated]);
GO

/**
 * @table testimonial Stores student testimonials
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[testimonial] (
  [idTestimonial] INTEGER IDENTITY(1, 1) NOT NULL,
  [studentName] NVARCHAR(100) NOT NULL,
  [photoUrl] NVARCHAR(500) NULL,
  [testimonialText] NVARCHAR(1000) NOT NULL,
  [rating] INTEGER NOT NULL,
  [courseLevel] VARCHAR(20) NOT NULL,
  [approved] BIT NOT NULL DEFAULT (0),
  [featured] BIT NOT NULL DEFAULT (0),
  [dateCreated] DATETIME2 NOT NULL DEFAULT (GETUTCDATE())
);
GO

/**
 * @primaryKey pkTestimonial
 * @keyType Object
 */
ALTER TABLE [functional].[testimonial]
ADD CONSTRAINT [pkTestimonial] PRIMARY KEY CLUSTERED ([idTestimonial]);
GO

/**
 * @check chkTestimonial_Rating
 * @enum {1} 1 star
 * @enum {2} 2 stars
 * @enum {3} 3 stars
 * @enum {4} 4 stars
 * @enum {5} 5 stars
 */
ALTER TABLE [functional].[testimonial]
ADD CONSTRAINT [chkTestimonial_Rating] CHECK ([rating] BETWEEN 1 AND 5);
GO

/**
 * @index ixTestimonial_Approved_Featured
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixTestimonial_Approved_Featured]
ON [functional].[testimonial]([approved], [featured]);
GO

/**
 * @table galleryCategory Stores photo gallery categories
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[galleryCategory] (
  [idGalleryCategory] INTEGER IDENTITY(1, 1) NOT NULL,
  [name] NVARCHAR(100) NOT NULL,
  [description] NVARCHAR(500) NOT NULL,
  [displayOrder] INTEGER NOT NULL DEFAULT (0)
);
GO

/**
 * @primaryKey pkGalleryCategory
 * @keyType Object
 */
ALTER TABLE [functional].[galleryCategory]
ADD CONSTRAINT [pkGalleryCategory] PRIMARY KEY CLUSTERED ([idGalleryCategory]);
GO

/**
 * @table galleryPhoto Stores gallery photos
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[galleryPhoto] (
  [idGalleryPhoto] INTEGER IDENTITY(1, 1) NOT NULL,
  [idGalleryCategory] INTEGER NOT NULL,
  [title] NVARCHAR(200) NOT NULL,
  [description] NVARCHAR(500) NOT NULL,
  [photoUrl] NVARCHAR(500) NOT NULL,
  [displayOrder] INTEGER NOT NULL DEFAULT (0),
  [dateCreated] DATETIME2 NOT NULL DEFAULT (GETUTCDATE())
);
GO

/**
 * @primaryKey pkGalleryPhoto
 * @keyType Object
 */
ALTER TABLE [functional].[galleryPhoto]
ADD CONSTRAINT [pkGalleryPhoto] PRIMARY KEY CLUSTERED ([idGalleryPhoto]);
GO

/**
 * @foreignKey fkGalleryPhoto_Category
 * @target functional.galleryCategory
 */
ALTER TABLE [functional].[galleryPhoto]
ADD CONSTRAINT [fkGalleryPhoto_Category] FOREIGN KEY ([idGalleryCategory])
REFERENCES [functional].[galleryCategory]([idGalleryCategory]);
GO

/**
 * @table faqCategory Stores FAQ categories
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[faqCategory] (
  [idFaqCategory] INTEGER IDENTITY(1, 1) NOT NULL,
  [name] NVARCHAR(100) NOT NULL,
  [iconName] VARCHAR(50) NOT NULL,
  [displayOrder] INTEGER NOT NULL DEFAULT (0)
);
GO

/**
 * @primaryKey pkFaqCategory
 * @keyType Object
 */
ALTER TABLE [functional].[faqCategory]
ADD CONSTRAINT [pkFaqCategory] PRIMARY KEY CLUSTERED ([idFaqCategory]);
GO

/**
 * @table faqQuestion Stores FAQ questions and answers
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[faqQuestion] (
  [idFaqQuestion] INTEGER IDENTITY(1, 1) NOT NULL,
  [idFaqCategory] INTEGER NOT NULL,
  [question] NVARCHAR(500) NOT NULL,
  [answer] NVARCHAR(MAX) NOT NULL,
  [viewCount] INTEGER NOT NULL DEFAULT (0),
  [displayOrder] INTEGER NOT NULL DEFAULT (0)
);
GO

/**
 * @primaryKey pkFaqQuestion
 * @keyType Object
 */
ALTER TABLE [functional].[faqQuestion]
ADD CONSTRAINT [pkFaqQuestion] PRIMARY KEY CLUSTERED ([idFaqQuestion]);
GO

/**
 * @foreignKey fkFaqQuestion_Category
 * @target functional.faqCategory
 */
ALTER TABLE [functional].[faqQuestion]
ADD CONSTRAINT [fkFaqQuestion_Category] FOREIGN KEY ([idFaqCategory])
REFERENCES [functional].[faqCategory]([idFaqCategory]);
GO

/**
 * @table blogCategory Stores blog categories
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[blogCategory] (
  [idBlogCategory] INTEGER IDENTITY(1, 1) NOT NULL,
  [name] NVARCHAR(100) NOT NULL,
  [description] NVARCHAR(500) NOT NULL,
  [slug] VARCHAR(100) NOT NULL
);
GO

/**
 * @primaryKey pkBlogCategory
 * @keyType Object
 */
ALTER TABLE [functional].[blogCategory]
ADD CONSTRAINT [pkBlogCategory] PRIMARY KEY CLUSTERED ([idBlogCategory]);
GO

/**
 * @table blogArticle Stores blog articles
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[blogArticle] (
  [idBlogArticle] INTEGER IDENTITY(1, 1) NOT NULL,
  [idBlogCategory] INTEGER NOT NULL,
  [title] NVARCHAR(200) NOT NULL,
  [slug] VARCHAR(200) NOT NULL,
  [summary] NVARCHAR(500) NOT NULL,
  [content] NVARCHAR(MAX) NOT NULL,
  [featuredImageUrl] NVARCHAR(500) NULL,
  [author] NVARCHAR(100) NOT NULL,
  [published] BIT NOT NULL DEFAULT (0),
  [dateCreated] DATETIME2 NOT NULL DEFAULT (GETUTCDATE()),
  [datePublished] DATETIME2 NULL
);
GO

/**
 * @primaryKey pkBlogArticle
 * @keyType Object
 */
ALTER TABLE [functional].[blogArticle]
ADD CONSTRAINT [pkBlogArticle] PRIMARY KEY CLUSTERED ([idBlogArticle]);
GO

/**
 * @foreignKey fkBlogArticle_Category
 * @target functional.blogCategory
 */
ALTER TABLE [functional].[blogArticle]
ADD CONSTRAINT [fkBlogArticle_Category] FOREIGN KEY ([idBlogCategory])
REFERENCES [functional].[blogCategory]([idBlogCategory]);
GO

/**
 * @index ixBlogArticle_Published_DatePublished
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixBlogArticle_Published_DatePublished]
ON [functional].[blogArticle]([published], [datePublished]);
GO

/**
 * @table blogComment Stores blog article comments
 * @multitenancy false
 * @softDelete false
 */
CREATE TABLE [functional].[blogComment] (
  [idBlogComment] INTEGER IDENTITY(1, 1) NOT NULL,
  [idBlogArticle] INTEGER NOT NULL,
  [name] NVARCHAR(100) NOT NULL,
  [email] NVARCHAR(100) NOT NULL,
  [commentText] NVARCHAR(1000) NOT NULL,
  [approved] BIT NOT NULL DEFAULT (0),
  [dateCreated] DATETIME2 NOT NULL DEFAULT (GETUTCDATE())
);
GO

/**
 * @primaryKey pkBlogComment
 * @keyType Object
 */
ALTER TABLE [functional].[blogComment]
ADD CONSTRAINT [pkBlogComment] PRIMARY KEY CLUSTERED ([idBlogComment]);
GO

/**
 * @foreignKey fkBlogComment_Article
 * @target functional.blogArticle
 */
ALTER TABLE [functional].[blogComment]
ADD CONSTRAINT [fkBlogComment_Article] FOREIGN KEY ([idBlogArticle])
REFERENCES [functional].[blogArticle]([idBlogArticle]);
GO

/**
 * @index ixBlogComment_Article_Approved
 * @type Search
 */
CREATE NONCLUSTERED INDEX [ixBlogComment_Article_Approved]
ON [functional].[blogComment]([idBlogArticle], [approved]);
GO