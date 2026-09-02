CREATE TABLE article_tag (
id int(10) unsigned NOT NULL AUTO_INCREMENT,
 article_id int(10) unsigned NOT NULL,
 tag_id int(10) unsigned NOT NUll,

  PRIMARY KEY (id),
    
  CONSTRAINT fk_article FOREIGN KEY(article_id) REFERENCES articles(id),
  CONSTRAINT fk_tag FOREIGN KEY(tag_id) REFERENCES tags(id)
    
)ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;