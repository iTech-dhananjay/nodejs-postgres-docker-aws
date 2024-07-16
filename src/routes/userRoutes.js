import express from 'express';
import { userService } from '../services/userService.js';
const router = express.Router();
import pool from '../config/db.js'

router.post('/', async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// router.get('/:id', async (req, res) => {
//     try {
//         const user = await userService.getUserById(req.params.id);
//         if (user) {
//             res.status(200).json(user);
//         } else {
//             res.status(404).json({ error: 'User not found' });
//         }
//     } catch (error) {
//         console.log(error,'test')
//         res.status(500).json({ error: error.message });
//     }
// });

router.get('/', async (req, res) => {
    try {
        const user = await userService.getUsers();
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.log(error,'test')
        res.status(500).json({ error: error.message });
    }
});

router.get('/v1/verify-db', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT current_database();');
        client.release();
        res.json({ database: result.rows[0].current_database });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;