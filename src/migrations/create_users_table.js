import pool from '../config/db.js';

const up = async () => {
    const client = await pool.connect();
    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Users table created successfully');
    } catch (err) {
        console.error('Error creating users table:', err.stack);
    } finally {
        client.release();
    }
};

const down = async () => {
    const client = await pool.connect();
    try {
        await client.query('DROP TABLE IF EXISTS users');
        console.log('Users table dropped successfully');
    } catch (err) {
        console.error('Error dropping users table:', err.stack);
    } finally {
        client.release();
    }
};

// Automatically run the migration when the script is executed
if (process.argv.includes('up')) {
    up();
} else if (process.argv.includes('down')) {
    down();
}

export { up, down };