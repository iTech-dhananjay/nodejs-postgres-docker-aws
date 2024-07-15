import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: 'localhost', // Since PostgreSQL is running in the same Docker network
    port: 5432,
    database: process.env.POSTGRES_DB,
});

export default pool;