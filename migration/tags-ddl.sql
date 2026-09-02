CREATE TABLE tags (
id int unsigned NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
created_at datetime DEFAULT CURRENT_TIMESTAMP(),
updated_at datetime DEFAULT CURRENT_TIMESTAMP(),
  
PRIMARY KEY(id)

)ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    