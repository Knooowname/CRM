import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const users_table = {
    sql: `
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        last_name           VARCHAR(150) DEFAULT(''),
        first_name          VARCHAR(150) DEFAULT(''),
        phone               VARCHAR(50) DEFAULT (''),
        date_create         TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
        email               TEXT DEFAULT(''),
        password            TEXT DEFAULT(''),
        user_role_id        BIGINT DEFAULT(0),
        job_title_id        BIGINT DEFAULT(0)
    );

    COMMENT ON TABLE users IS 'Пользователи компании';
    COMMENT ON COLUMN users.id IS 'Идентификатор';
    COMMENT ON COLUMN users.last_name IS 'Фамилия';
    COMMENT ON COLUMN users.first_name IS 'Имя';
    COMMENT ON COLUMN users.phone IS 'Номер телефона';
    COMMENT ON COLUMN users.date_create IS 'Дата регистарции';
    COMMENT ON COLUMN users.email IS 'Почта/Логин';
    COMMENT ON COLUMN users.password IS 'Пароль';
    COMMENT ON COLUMN users.user_role_id IS 'Идентификатор роли';
    COMMENT ON COLUMN users.job_title_id IS 'Идентификатор должности';
    `,
    args: new Array()
};


export const insert_user = {
    sql:`INSERT INTO users(last_name, first_name, phone, date_create, email, password, user_role_id, job_title_id) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,  
    args:['admin', 'admin', '+7(900)000-00-00', dateTimeToSQL(new Date(Date.now())), 'admin@mail.ru', crypto.createHmac('sha256', CONFIG.crypto_code).update('admin').digest('hex'),1, 1 ]
};
