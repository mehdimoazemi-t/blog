const fs = require("fs");
const path = require("path");
const db = require("../db");

const migrate = async () => {

    const connection = await db.getConnection()

    const createTableUsersSql = fs.readFileSync(path.resolve(__dirname, "users-ddl.sql"), "utf8", (err, data) => {
        if (err) throw err
        return data
    })

    const createTableArticlesSql = fs.readFileSync(path.resolve(__dirname, "articles-ddl.sql"), "utf8", (err, data) => {
        if (err) throw err
        return data
    })
    const createTableTagsSql = fs.readFileSync(path.resolve(__dirname, "tags-ddl.sql"), "utf8", (err, data) => {
        if (err) throw err
        return data
    })

    const createTableArticleTagSql = fs.readFileSync(path.resolve(__dirname, "article_tag-ddl.sql"), "utf8", (err, data) => {
        if (err) throw err
        return data
    })


    connection.beginTransaction()

    try {

        await connection.query(createTableUsersSql)
        await connection.query(createTableArticlesSql)
        await connection.query(createTableTagsSql)
        await connection.query(createTableArticleTagSql)

        connection.commit()
    } catch (error) {
        await connection.rollback()
        throw error

    }
}


migrate()