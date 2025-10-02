
import { dateTimeToStr } from '../config/dbase/DateStr'
import { DBase, endDB, getDB } from '../config/dbase/DBase';



import { create_db } from './sql/createdb';
import { access_table, insert_access } from './sql/access';
import { events_table } from './sql/events';
import { job_title_table, insert_job_title } from './sql/job_title';
import { services_table } from './sql/services';
import { status_table } from './sql/status';
import { user_role_table, insert_user_role } from './sql/user_roles';
import { users_table, insert_user } from './sql/users';



async function run() {

    console.log("CREATE DATABASE \"CRM\"");
    await create_db();
    console.log("DATABASE \"CRM\" ADD");

    var db: DBase = getDB();

    var dtRow = await db.NOW();
    var dt = new Date(dtRow);
    console.log("START INSTALLER");


    //Создание таблиц пользователя
    console.log("ADDING TABLE \"access_table\"");
    await db.query(access_table.sql);
    console.log("TABLE \"access_table\" ADD");

    console.log("ADDING TABLE \"events_table\"");
    await db.query(events_table.sql);
    console.log("TABLE \"events_table\" ADD");

    console.log("ADDING TABLE \"job_title_table\"");
    await db.query(job_title_table.sql);
    console.log("TABLE \"job_title_table\" ADD");

    console.log("ADDING TABLE \"services_table\"");
    await db.query(services_table.sql);
    console.log("TABLE \"services_table\" ADD");

    console.log("ADDING TABLE \"status_table\"");
    await db.query(status_table.sql);
    console.log("TABLE \"status_table\" ADD");

    console.log("ADDING TABLE \"user_role\"");
    await db.query(user_role_table.sql);
    console.log("TABLE \"user_role\" ADD");

    console.log("ADDING TABLE \"users_table\"");
    await db.query(users_table.sql);
    console.log("TABLE \"users_table\" ADD");


    console.log("CREATE ACCESS");
    await db.query(insert_access.sql, insert_access.args);

    console.log("CREATE JOB TITLE");
    await db.query(insert_job_title.sql, insert_job_title.args);

    console.log("CREATE USER ROLE");
    await db.query(insert_user_role.sql, insert_user_role.args);

    console.log("CREATE USER");
    await db.query(insert_user.sql, insert_user.args);

    endDB();
    console.log("END INSTALLER");
}

run();
