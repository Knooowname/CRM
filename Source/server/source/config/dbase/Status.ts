import { DBase, getDB } from "./DBase";
import config from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";


export class Status {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async get_status() {
        var db_response = await this.db.query("SELECT * FROM status")
        if (db_response.rows.length !== 0) {
            return db_response.rows
        }
        else { return null }
    }

    async add_status() {
        var db_response = await this.db.query("SELECT id FROM status WHERE name_status = '" + this.args.name_status + "' ");
        if (db_response.rows[0] === undefined) {
            db_response = await this.db.query("INSERT INTO status (name_status) VALUES ('" + this.args.name_status + "') RETURNING id");
            return db_response.rows
        }
        else { return null }
    }

    async edit_status() {
        var db_response = await this.db.query("SELECT * FROM status WHERE name_status = '"+this.args.name_status+"'");
        if (db_response.rows[0] === undefined ) {
            db_response = await this.db.query("UPDATE status SET name_status = '"+this.args.name_status+"' WHERE id = "+this.args.id+" RETURNING id")
            return db_response.rows
        }
        else { return [] }
    }



}