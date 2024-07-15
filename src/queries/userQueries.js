import db from '../config/db.js'

const createUser = (user) => {
    const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [user.name, user.email, user.password];
    return db.query(query, values);
};

const getUserById = (id) => {
    const query = 'SELECT * FROM users WHERE id = $1';
    return db.query(query, [id]);
};


export const userQueries = {
    createUser,
    getUserById,
}