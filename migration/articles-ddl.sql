CREATE TABLE articles (
id int(10) unsigned NOT NULL AUTO_INCREMENT,
 title varchar(255) ,
 content mediumtext NOT NULL ,
 slug varchar(255) NOT NULL UNIQUE,
 author_id int(10) unsigned NOT NULL,  
 created_at datetime DEFAULT CURRENT_TIMESTAMP(),
 updated_at datetime DEFAULT CURRENT_TIMESTAMP(),

 PRIMARY KEY(id),
 CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES users(id)  
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    