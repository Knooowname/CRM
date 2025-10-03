import CONFIG from '../../config/config.json';
import pg from 'pg';

const { Pool } = pg;

export const create_db = async () => {
    const pool = new Pool({
        user: CONFIG.config_db.user,
        host: CONFIG.config_db.host,
        password: CONFIG.config_db.password,
        port: CONFIG.config_db.port,
        database: "postgres" // подключаемся к postgres, а не к CRM
    });

    try {
        await pool.query("CREATE DATABASE \""+CONFIG.config_db.database+"\"");
        console.log("База данных "+CONFIG.config_db.database+" создана");
    } catch (err) {
        if (err.code === "42P04") {
            console.log("База данных "+CONFIG.config_db.database+" уже существует");
        } else {
            console.error("Ошибка при создании БД:", err);
        }
    } finally {
        await pool.end();
    }
};
