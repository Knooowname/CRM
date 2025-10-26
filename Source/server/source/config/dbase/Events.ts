import { DBase, getDB } from "./DBase";
import config from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";


export class Events {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async get_events_user() {
        var db_response = await this.db.query("SELECT * FROM events WHERE user_id = "+this.args.user_id+"");
        if (db_response.rows.length !== 0) {
            return db_response.rows
        }
        else { return null }
    }
    async get_events_client() {
        var db_response = await this.db.query("SELECT * FROM events WHERE client_id = "+this.args.client_id+" ");
        if (db_response.rows.length !== 0) {
            return db_response.rows
        }
        else { return null }
    }

    async add_events() {
        var start_date = dateTimeToSQL(new Date(this.args.datetime_start_event));
        var end_date = dateTimeToSQL(new Date(this.args.datetime_end_event));

        var db_response = await this.db.query("INSERT INTO events (datetime_start_event, user_id, client_id, datetime_end_event, id_services, id_status, information) " +
            "VALUES ('" + start_date + "', " + this.args.user_id + ", " + this.args.client_id + ", '" + end_date + "', " + this.args.id_services + ", " + this.args.id_status + ", '" + this.args.information + "') RETURNING id");
        
        return db_response.rows;
    }

    async edit_events() {
        var start_date = dateTimeToSQL(new Date(this.args.datetime_start_event));
        var end_date = dateTimeToSQL(new Date(this.args.datetime_end_event));
        var db_response = await this.db.query("UPDATE events SET datetime_start_event = '" + start_date + "', user_id = " + this.args.user_id + ", " +
            "client_id = " + this.args.client_id + ", datetime_end_event = '" + end_date + "', id_services = " + this.args.id_services + ", " + "id_status = "+ this.args.id_status+ " "+
            "information = '" + this.args.information + "' WHERE id = " + this.args.id + " RETURNING id");
        if (db_response.rows.length !== 0) {
            return db_response.rows
        }
        else { return [] }
    }

}