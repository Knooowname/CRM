import { DBase, getDB } from "./DBase";
import config from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";


export class JobTitle {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async get_job_title() {
        var db_response = await this.db.query("SELECT * FROM job_title")
        if (db_response.rows.length !== 0) {
            return db_response.rows
        }
        else { return null }
    }

    async add_job_title() {
        var db_response = await this.db.query("SELECT id FROM job_title WHERE name_job_title = '" + this.args.name_job_title + "' ");
        if (db_response.rows[0] === undefined) {
            db_response = await this.db.query("INSERT INTO job_title (name_job_title) VALUES ('" + this.args.name_job_title + "') RETURNING id");
            return db_response.rows
        }
        else { return null }
    }

    async edit_job_title() {
        var db_response = await this.db.query("SELECT * FROM job_title WHERE name_job_title = '" + this.args.name_job_title + "'");
        console.log(db_response.rows)
        if (db_response.rows[0] === undefined) {
            db_response = await this.db.query("UPDATE job_title SET name_job_title = '" + this.args.name_job_title + "' WHERE id = " + this.args.id + " RETURNING id")
            return db_response.rows
        }
        else { return [] }
    }



}