import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const access_table = {
    sql: `
    DROP TABLE IF EXISTS access;
    CREATE TABLE access (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        name_access           VARCHAR(150) DEFAULT('')
    );

    COMMENT ON TABLE access IS 'Опциональные элементы системы';
    COMMENT ON COLUMN access.id IS 'Идентификатор';
    COMMENT ON COLUMN access.name_access IS 'Название элементов';
    `,
    args: new Array()
};


export const insert_access = {
    sql:`INSERT INTO access(name_access) VALUES ($1), ($2)`,  
    args:['Оказание услуг', "Планировщик"]
};
