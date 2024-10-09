
/*====== List/Insert/Update/Delete- Company Data by companyInstProc===*/
/*=== Post Procedure==*/
DROP PROCEDURE postCompanyMaster;

DELIMITER //
CREATE PROCEDURE postCompanyMaster (requestAction VARCHAR(10), companyId int, companyType int, companyName VARCHAR(150),companyDescription VARCHAR(150), companyOwner VARCHAR(100), companyEmail VARCHAR(150), companyMobile VARCHAR(10), companyPhone VARCHAR(15),companyAddress VARCHAR(250))
BEGIN
	IF (requestAction = 'add') THEN
    INSERT INTO master_company (`company_type`, `company_name`,`company_description`, `company_owner`, `company_email`, `company_mobile`, `company_phone`, `company_address`) VALUES (companyType, companyName, companyDescription, companyOwner, companyEmail, companyMobile, companyPhone, companyAddress);
    SELECT LAST_INSERT_ID();
  ELSEIF(requestAction='edit') THEN
    UPDATE master_company SET company_type=companyType, company_name=companyName WHERE id=companyId;
  ELSEIF(requestAction='delete') THEN
    DELETE FROM master_company  WHERE id=companyId;
  ELSE
    SELECT * FROM  master_company;
  END IF;
     
END//


/*=== Get Procedure =====*/
DELIMITER //
CREATE PROCEDURE getCompanyMaster (requestAction VARCHAR(10), companyId int)
BEGIN
	IF(companyId >0 ) THEN
    	SELECT id, company_type, company_name, company_description, company_owner, company_email, company_mobile, company_phone, company_address FROM  master_company where id=companyId;
    ELSE
    	SELECT id, company_type, company_name, company_description, company_owner, company_email, company_mobile, company_phone, company_address FROM  master_company;
  END IF;
END//

/*====== List/Insert/Update/Delete- Company Data by companyInstProc===*/
/*=== Post Procedure==*/
DROP PROCEDURE postCompanyMaster;

DELIMITER //
CREATE PROCEDURE postCompanyMaster (requestAction VARCHAR(10), companyId int, companyType int, companyName VARCHAR(150),companyDescription VARCHAR(150), companyOwner VARCHAR(100), companyEmail VARCHAR(150), companyMobile VARCHAR(10), companyPhone VARCHAR(15),companyAddress VARCHAR(250))
BEGIN
	IF (requestAction = 'add') THEN
    INSERT INTO master_company (`company_type`, `company_name`,`company_description`, `company_owner`, `company_email`, `company_mobile`, `company_phone`, `company_address`) VALUES (companyType, companyName, companyDescription, companyOwner, companyEmail, companyMobile, companyPhone, companyAddress);
    SELECT LAST_INSERT_ID();
  ELSEIF(requestAction='edit') THEN
    UPDATE master_company SET company_type=companyType, company_name=companyName WHERE id=companyId;
  ELSEIF(requestAction='delete') THEN
    DELETE FROM master_company  WHERE id=companyId;
  ELSE
    SELECT * FROM  master_company;
  END IF;
     
END//


/*=== Get Procedure =====*/
DELIMITER //
CREATE PROCEDURE getUsersMaster(requestAction VARCHAR(10), userId int)
BEGIN
	IF(userId >0 ) THEN
    	SELECT SELECT a.id as aid, a.auth_type, a.auth_code, a.role_id, a.category_id, a.email, a.mobile, a.password, a.first_name, a.last_name, a.photo, a.is_mobile_verify, a.is_email_verify, a.status, a.is_block, a.is_login, a.hascode, a.created_date,a.created_date_time,b.id as bid, b.user_type, b.status, b.created_by, b.created_date, b.is_deleted FROM mst_users as a LEFT JOIN mst_user_role as b ON b.id = a.role_id WHERE a.email=userId;
    ELSE
    	SELECT SELECT a.id as aid, a.auth_type, a.auth_code, a.role_id, a.category_id, a.email, a.mobile, a.password, a.first_name, a.last_name, a.photo, a.is_mobile_verify, a.is_email_verify, a.status, a.is_block, a.is_login, a.hascode, a.created_date,a.created_date_time,b.id as bid, b.user_type, b.status, b.created_by, b.created_date, b.is_deleted FROM mst_users as a LEFT JOIN mst_user_role as b ON b.id = a.role_id;
  END IF;
END//

/*====== List/Insert/Update/Delete- Folk Data by UsersInstProc===*/
/*=== Post Procedure==*/
DROP PROCEDURE postFolkMaster;

DELIMITER //
CREATE PROCEDURE postFolkMaster (requestAction VARCHAR(10), folkId int,categoryType int(11),tribeName VARCHAR(200),folkTitle VARCHAR(250),folkVariation VARCHAR(200),folkComposer VARCHAR(200),folkGenre VARCHAR(200),folkDuration int(11),folkInstrument VARCHAR(200) ,folkRegion VARCHAR(200),folkSocial VARCHAR(200),folkHistorical VARCHAR(200),folkSinger varchar(200),folkLyrics varchar(200), danceName varchar(200), folkCharacter varchar(200), danceType varchar(200), folkCoustumes varchar(200), folkMusic varchar(200), folkchoreography varchar(200), plotSummary varchar(200), folkStoryteller varchar(200),folkMoral varchar(200),status tinyint(1),is_deleted tinyint(1),created_date datetime,modify_date timestamp)
BEGIN
  IF (requestAction = 'add') THEN
   INSERT INTO mst_folk(`folk_category_id`, `tribe_name`, `title`, `variation`, `compser`, `genre`, `duration`, `instrument`, `region_culture`, `social_culture`, `historical_religious`, `steps_chorepgraphy`, `characters`, `singer`, `lyrics`, `dance`, `dance_type`, `coutumes`, `music`, `plot_summary`, `storyteller`, `moral` ,`status`, `is_deleted`,`created_date`,`modify_date`) VALUES (categoryType, tribeName, folkTitle, folkVariation, folkComposer, folkGenre, folkDuration, folkInstrument, folkRegion, folkSocial,folkHistorical, folkchoreography, folkCharacter, folkSinger, folkLyrics, danceName, danceType, folkCoustumes,folkMusic, plotSummary, folkStoryteller, folkMoral,status,is_deleted,created_date,modify_date);  

  SELECT LAST_INSERT_ID();
  ELSEIF(requestAction='edit') THEN
    UPDATE mst_folk SET folk_category_id=categoryType, tribe_name=tribeName,title=folkTitle WHERE id=folkId;
  ELSEIF(requestAction='delete') THEN
  UPDATE mst_folk SET is_deleted = '1'  WHERE id=folkId;
  ELSE
    SELECT * FROM  mst_folk;
  END IF;
     
END//


/*=== Get Procedure =====*/
DELIMITER //
CREATE PROCEDURE getAllFolkMaster (requestAction VARCHAR(10), folkId int)
BEGIN
	IF(folkId >0 ) THEN

      SELECT a.id, a.folk_category_id, a.tribe_name, a.title, a.variation, a.compser, a.genre, a.duration, a.instrument, region_culture, a.social_culture, a.historical_religious, a.steps_chorepgraphy,a.characters,a.singer,a.lyrics,a.dance,a.dance_type,a.coutumes,a.music,a.plot_summary,a.storyteller,a.moral, a.status, a.is_deleted, a.created_date,a. modify_date,b.name FROM mst_folk as a LEFT JOIN mst_folk_category as b ON a.folk_category_id = b.id  WHERE a.id=folkId;

    ELSE
    	SELECT a.id, a.folk_category_id, a.tribe_name, a.title, a.variation, a.compser, a.genre, a.duration, a.instrument, region_culture, a.social_culture, a.historical_religious, a.steps_chorepgraphy,a.characters,a.singer,a.lyrics,a.dance,a.dance_type,a.coutumes,a.music,a.plot_summary,a.storyteller,a.moral, a.status, a.is_deleted, a.created_date,a. modify_date,b.name FROM mst_folk as a LEFT JOIN mst_folk_category as b ON a.folk_category_id = b.id;
  END IF;
END//