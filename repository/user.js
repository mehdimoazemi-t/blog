const db = require("../db");

const create = async ({ name, username, email, password }) => {

    const insertQueery = "INSERT INTO users (name,username,email,password) VALUES (?,?,?,?) ";

    const [createUser] = await db.execute(insertQueery, [name, username, email, password]);

    const selectQuery = "SELECT * FROM users WHERE id = ?";

    const [user] = await db.execute(selectQuery,[createUser.insertId]);

    return user[0]

}


const findById = async (id) => {

    const selectQueery = "SELECT * FROM users WHERE id = ?";

    const [user] = await db.execute(selectQueery, [id]);

    return user[0]

}


const findByUserName = async (username) => {

    const selectQueery = "SELECT * FROM users WHERE username = ?";

    const [user] = await db.execute(selectQueery, [username]);

    return user[0]

}



module.exports = {
    create,
    findById,
    findByUserName
}