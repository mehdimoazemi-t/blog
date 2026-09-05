const db = require("../db")

const create = async (name) => {

    const insertQuery = "INSERT INTO tags (name) VALUES (?)"
    const selectQuery = "SELECT id,name,created_at FROM tags WHERE id = ?"

    const [createTag] = await db.execute(insertQuery, [name]);

    const [tag] = await db.execute(selectQuery, [createTag.insertId]);

    return tag[0]

}


const findAll = async () => {

    const selectQuery = "SELECT id,name,created_at FROM tags"

    const tags = await db.execute(selectQuery);

    return tags[0]

}



const findById = async (id) => {

    const selectQuery = "SELECT id,name,created_at FROM tags WHERE id = ?"

    const [tag] = await db.execute(selectQuery, [id]);

    return tag

}

const findByName = async (name) => {

    const selectQuery = "SELECT id,name,created_at FROM tags WHERE name = ?"

    const [tag] = await db.execute(selectQuery, [name]);

    return tag[0]

}


const remove = async (id) => {

    const deleteQuery = "DELETE FROM tags WHERE id = ?"

    const deletedTag = await db.execute(deleteQuery, [id]);

    return deletedTag

}



module.exports = {
    create,
    findAll,
    findById,
    findByName,
    remove
}