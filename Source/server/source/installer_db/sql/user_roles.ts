import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const user_role_table = {
    sql: `
    DROP TABLE IF EXISTS user_roles;
    CREATE TABLE user_roles (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        name_role           VARCHAR(150) DEFAULT('')
    );

    COMMENT ON TABLE user_roles IS 'Статусы обработки';
    COMMENT ON COLUMN user_roles.id IS 'Идентификатор';
    COMMENT ON COLUMN user_roles.name_role IS 'Название роли';
    `,
    args: new Array()
};


export const insert_user_role = {
    sql:`INSERT INTO user_roles(name_role) VALUES ($1), ($2)`,  
    args:['Администратор', "Клиент"]
};

