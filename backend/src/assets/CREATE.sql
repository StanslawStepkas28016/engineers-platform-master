-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2025-03-20 16:55:22.24

-- tables
-- Table: Advert
CREATE TABLE Advert (
                        IdAdvert int  NOT NULL IDENTITY,
                        Title varchar(150)  NOT NULL,
                        Description varchar(500)  NOT NULL,
                        Price money  NOT NULL,
                        IsActive bit  NOT NULL,
                        DateCreated datetime  NOT NULL,
                        DateDeleted datetime  NULL,
                        IsDeleted bit  NOT NULL,
                        IdUser int  NOT NULL,
                        CONSTRAINT Advert_pk PRIMARY KEY  (IdAdvert)
);

-- Table: AdvertCategories
CREATE TABLE AdvertCategories (
                                  IdAdvert int  NOT NULL,
                                  IdAdvertCategoryDict int  NOT NULL,
                                  CONSTRAINT AdvertCategories_pk PRIMARY KEY  (IdAdvert,IdAdvertCategoryDict)
);

-- Table: AdvertCategoryDict
CREATE TABLE AdvertCategoryDict (
                                    IdAdvertCategoryDict int  NOT NULL IDENTITY,
                                    CategoryName varchar(250)  NOT NULL,
                                    CONSTRAINT AdvertCategoryDict_pk PRIMARY KEY  (IdAdvertCategoryDict)
);

-- Table: Image
CREATE TABLE Image (
                       IdImage int  NOT NULL IDENTITY,
                       ImageLink varchar(500)  NOT NULL,
                       IdAdvert int  NOT NULL,
                       CONSTRAINT Image_pk PRIMARY KEY  (IdImage)
);

-- Table: PlaylistLink
CREATE TABLE PlaylistLink (
                              IdPlaylistLink int  NOT NULL IDENTITY,
                              Link varchar(250)  NOT NULL,
                              IdAdvert int  NOT NULL,
                              IdPlaylistType int  NOT NULL,
                              CONSTRAINT PlaylistLink_pk PRIMARY KEY  (IdPlaylistLink)
);

-- Table: PlaylistTypeDict
CREATE TABLE PlaylistTypeDict (
                                  IdPlaylistTypeDict int  NOT NULL IDENTITY,
                                  PlaylistTypeName varchar(250)  NOT NULL,
                                  CONSTRAINT PlaylistTypeDict_pk PRIMARY KEY  (IdPlaylistTypeDict)
);

-- Table: Review
CREATE TABLE Review (
                        IdReview int  NOT NULL IDENTITY,
                        Content varchar(500)  NOT NULL,
                        SatisfactionLevel varchar(5)  NOT NULL,
                        DateCreated datetime  NOT NULL,
                        DateDeleted datetime  NULL,
                        isDeleted bit  NOT NULL,
                        IdAdvert int  NOT NULL,
                        CONSTRAINT Review_pk PRIMARY KEY  (IdReview)
);

-- Table: Role
CREATE TABLE Role (
                      IdRole int  NOT NULL IDENTITY,
                      RoleName varchar(20)  NOT NULL,
                      CONSTRAINT Role_pk PRIMARY KEY  (IdRole)
);

-- Table: SocialMediaLink
CREATE TABLE SocialMediaLink (
                                 IdSocialMediaLink int  NOT NULL IDENTITY,
                                 SocialMediaLink varchar(250)  NOT NULL,
                                 IdUser int  NOT NULL,
                                 IdSocialMediaTypeDict int  NOT NULL,
                                 CONSTRAINT SocialMediaLink_pk PRIMARY KEY  (IdSocialMediaLink)
);

-- Table: SocialMediaTypeDict
CREATE TABLE SocialMediaTypeDict (
                                     IdSocialMediaType int  NOT NULL IDENTITY,
                                     SocialMediaTypeName varchar(250)  NOT NULL,
                                     CONSTRAINT SocialMediaTypeDict_pk PRIMARY KEY  (IdSocialMediaType)
);

-- Table: User
CREATE TABLE "User" (
                        IdUser int  NOT NULL IDENTITY,
                        Username varchar(50)  NOT NULL,
                        Email varchar(30)  NOT NULL,
                        PhoneNumber varchar(16)  NOT NULL,
                        FirstName varchar(50)  NOT NULL,
                        LastName varchar(50)  NOT NULL,
                        Password varchar(50)  NOT NULL,
                        DateCreated datetime  NOT NULL,
                        DateDeleted datetime  NULL,
                        IsDeleted bit  NOT NULL,
                        IdRole int  NOT NULL,
                        CONSTRAINT User_pk PRIMARY KEY  (IdUser)
);

-- foreign keys
-- Reference: Advert_User (table: Advert)
ALTER TABLE Advert ADD CONSTRAINT Advert_User
    FOREIGN KEY (IdUser)
        REFERENCES "User" (IdUser);

-- Reference: Image_Advert (table: Image)
ALTER TABLE Image ADD CONSTRAINT Image_Advert
    FOREIGN KEY (IdAdvert)
        REFERENCES Advert (IdAdvert);

-- Reference: PlaylistLink_Advert (table: PlaylistLink)
ALTER TABLE PlaylistLink ADD CONSTRAINT PlaylistLink_Advert
    FOREIGN KEY (IdAdvert)
        REFERENCES Advert (IdAdvert);

-- Reference: PlaylistLink_PlaylistTypeDict (table: PlaylistLink)
ALTER TABLE PlaylistLink ADD CONSTRAINT PlaylistLink_PlaylistTypeDict
    FOREIGN KEY (IdPlaylistType)
        REFERENCES PlaylistTypeDict (IdPlaylistTypeDict);

-- Reference: Review_Advert (table: Review)
ALTER TABLE Review ADD CONSTRAINT Review_Advert
    FOREIGN KEY (IdAdvert)
        REFERENCES Advert (IdAdvert);

-- Reference: SocialMediaLink_SocialMediaTypeDict (table: SocialMediaLink)
ALTER TABLE SocialMediaLink ADD CONSTRAINT SocialMediaLink_SocialMediaTypeDict
    FOREIGN KEY (IdSocialMediaTypeDict)
        REFERENCES SocialMediaTypeDict (IdSocialMediaType);

-- Reference: SocialMediaLink_User (table: SocialMediaLink)
ALTER TABLE SocialMediaLink ADD CONSTRAINT SocialMediaLink_User
    FOREIGN KEY (IdUser)
        REFERENCES "User" (IdUser);

-- Reference: Table_10_Advert (table: AdvertCategories)
ALTER TABLE AdvertCategories ADD CONSTRAINT Table_10_Advert
    FOREIGN KEY (IdAdvert)
        REFERENCES Advert (IdAdvert);

-- Reference: Table_10_AdvertCategoryDict (table: AdvertCategories)
ALTER TABLE AdvertCategories ADD CONSTRAINT Table_10_AdvertCategoryDict
    FOREIGN KEY (IdAdvertCategoryDict)
        REFERENCES AdvertCategoryDict (IdAdvertCategoryDict);

-- Reference: User_Role (table: User)
ALTER TABLE "User" ADD CONSTRAINT User_Role
    FOREIGN KEY (IdRole)
        REFERENCES Role (IdRole);

-- End of file.

