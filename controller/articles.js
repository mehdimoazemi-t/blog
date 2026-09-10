const Article = require("../repository/articles");
const Tags = require("../repository/tags");
const { formatDateTime } = require("../utils/formatDateTime");

exports.add = async (req, res, next) => {

    try {
        const { title, content, slug, tags } = req.body


        const article = await Article.create({
            title,
            content,
            slug,
            cover: req.file.filename,
            author_id: req.user.id
        })

        await tags?.forEach(async tagId => {
            await Article.addTag(article.id, tagId)
        });

        return res.status(201).json({ message: "Article create successfully" })

    } catch (error) {
        next(error)
    }
}

exports.findTagArticle = async (req, res, next) => {
    try {

        const { tagName } = req.params

        const tag = await Tags.findByName(tagName);

        const articles = await Article.findArticlesByTag(tag.id)

        const formattedArticles = articles.map(article => {
            return {
                title: article.title,
                content: article.content,
                cover: article.cover,
                slug: article.slug,
                created_at: formatDateTime(article.created_at),
                author: article.author,
                tag: article.tag
            };
        });

        return res.status(200).json(formattedArticles)

    } catch (error) {
        next(error)
    }

}

exports.getAll = async (req, res, next) => {
    // Code ...
}

exports.delete = async (req, res, next) => {
    // Code ...
}

exports.getBySlug = async (req, res, next) => {

    const { slug } = req.params

    const article = await Article.findOne(slug);

    if (!article) {
        return res.status(404).json({
            message: "Article Not Found"
        })
    }


    return res.status(200).json(article)

}