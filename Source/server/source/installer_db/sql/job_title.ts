import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const job_title_table = {
    sql: `
    DROP TABLE IF EXISTS job_title;
    CREATE TABLE job_title (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        name_job_title      VARCHAR(150) DEFAULT('')
    );

    COMMENT ON TABLE job_title IS 'Должности';
    COMMENT ON COLUMN job_title.id IS 'Идентификатор';
    COMMENT ON COLUMN job_title.name_job_title IS 'Название должности';
    `,
    args: new Array()
};


export const insert_job_title = {
    sql:`INSERT INTO job_title(name_job_title) 
    VALUES ($1)`,  
    args:['Администратор']
};

