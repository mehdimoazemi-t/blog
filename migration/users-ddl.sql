CREATE TABLE users (
id int(10) unsigned NOT NULL AUTO_INCREMENT,
 name varchar(255) ,
 username varchar(255) NOT NULL UNIQUE,
 email varchar(255) NOT NULL UNIQUE,
 avatar varchar(255),  
 password varchar(48) ,
 providers ENUM("local","google","meta"),
 role ENUM("ADMIN","USER") NOT NULL DEFAULT "USER",
    
 PRIMARY KEY(id)   
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    