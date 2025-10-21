import crypto from 'crypto';
import CONFIG from '../../config/config.json';
import {dateTimeToSQL} from '../../config/dbase/DateStr'
import {DBase, endDB, getDB} from '../../config/dbase/DBase'



export const events_table = {
    sql: `
    DROP TABLE IF EXISTS events;
    CREATE TABLE events (
        id                       BIGSERIAL NOT NULL PRIMARY KEY,
        datetime_start_event     TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
        user_id                  BIGINT DEFAULT(0),
        client_id                BIGINT DEFAULT(0),
        datetime_end_event       TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),
        id_services              BIGINT DEFAULT(0),
        id_status                BIGINT DEFAULT(0),
        information               TEXT DEFAULT('')
    );

    COMMENT ON TABLE events IS 'Собития';
    COMMENT ON COLUMN events.id IS 'Идентификатор';
    COMMENT ON COLUMN events.datetime_start_event IS 'дата время начала события';
    COMMENT ON COLUMN events.user_id IS 'Кто обслуживает';
    COMMENT ON COLUMN events.client_id IS 'Кого обслуживают';
    COMMENT ON COLUMN events.datetime_end_event IS 'Дата время окончания события';
    COMMENT ON COLUMN events.id_services IS 'Идентификтор услуги';
    COMMENT ON COLUMN events.id_status IS 'Идентификтор услуги';
    COMMENT ON COLUMN events.information IS 'Дополнительная информация';
    `,
    args: new Array()
};



