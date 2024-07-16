import {userQueries} from '../queries/userQueries.js' ;

const createUser = async (user) => {
    try {
        const result = await userQueries.createUser(user);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

const getUserById = async (id) => {
    try {
        const result = await userQueries.getUserById(id);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};

export const userService = {
    createUser,
    getUserById,
}