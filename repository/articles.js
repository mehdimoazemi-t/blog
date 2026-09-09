const db = require("../db");

const create = async ({ title, content, cover, slug, author_id }) => {

    const insertQuery = "INSERT INTO articles (title,content,cover,slug,author_id) VALUES (?,?,?,?,?)"
    const selectQuery = "SELECT * FROM articles WHERE id = ?"


    const [createdArticle] = await db.execute(insertQuery, [title, content, cover, slug, author_id]);
    const [article] = await db.execute(selectQuery, [createdArticle.insertId])

    return article[0]

}

const findAll = async () => {

    const selectQuery = "SELECT * FROM articles"
    const [articles] = await db.execute(selectQuery)

    return articles
}

const addTag = async (articleID, tagID) => {
    try {
        const insertQuery = "INSERT INTO article_tag (article_id , tag_id) VALUES (?,?)"

        await db.execute(insertQuery, [articleID, tagID])

        return true
    } catch (error) {
        throw error
    }
}

const findArticlesByTag = async (id) => {

    const selectQuery = "SELECT articles.title, articles.content, articles.cover , articles.slug , articles.created_at , users.username As author,tags.name As tag FROM article_tag JOIN tags ON article_tag.tag_id = tags.id JOIN articles ON articles.id = article_tag.article_id JOIN users ON articles.author_id = users.id WHERE tags.id = (?)"
    const [article] = await db.execute(selectQuery, [id])

    return article
}

const findOne = async (slug) => {

    const selectQuery = "SELECT * FROM articles WHERE slug = ?"
    const [article] = await db.execute(selectQuery, [slug])

    return article

}

const deleteOne = async (id) => {

    const deleteQuery = "DELETE FROM article WHERE id = ?"
    const [deletedItem] = await db.execute(deleteQuery, [id])

    return deletedItem

}

module.exports = {
    create,
    findAll,
    findArticlesByTag,
    findOne,
    addTag,
    deleteOne
}