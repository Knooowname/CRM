import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const services_table = {
    sql: `
    DROP TABLE IF EXISTS services;
    CREATE TABLE services (
        id                  BIGSERIAL NOT NULL PRIMARY KEY,
        name_services       VARCHAR(150) DEFAULT(''),
        price               VARCHAR(150) DEFAULT('')
    );

    COMMENT ON TABLE services IS 'Услуги';
    COMMENT ON COLUMN services.id IS 'Идентификатор';
    COMMENT ON COLUMN services.name_services IS 'Название услуги';
    COMMENT ON COLUMN services.price IS 'Цена услуги';
    `,
    args: new Array()
};



