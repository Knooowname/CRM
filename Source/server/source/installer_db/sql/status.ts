import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const status_table = {
    sql: `
    DROP TABLE IF EXISTS status;
    CREATE TABLE status (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        name_status         VARCHAR(150) DEFAULT('')
        
    );

    COMMENT ON TABLE status IS 'Статусы обработки';
    COMMENT ON COLUMN status.id IS 'Идентификатор';
    COMMENT ON COLUMN status.name_status IS 'Название статуса';
    `,
    args: new Array()
};

