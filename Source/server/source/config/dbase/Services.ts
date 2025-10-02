import { DBase, getDB } from "./DBase";
import config from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";


export class Services {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async get_services() {
        var db_response = await this.db.query("SELECT * FROM services")
        if (db_response.rows.length !== 0) {
            return db_response.rows
        }
        else { return null }
    }

    async add_services() {
        var db_response = await this.db.query("SELECT id FROM services WHERE name_services = '" + this.args.name_services + "' ");
        if (db_response.rows[0] === undefined) {
            db_response = await this.db.query("INSERT INTO services (name_services, price) VALUES ('" + this.args.name_services + "', '" + this.args.price + "') RETURNING id");
            return db_response.rows
        }
        else { return null }
    }

    async edit_services() {
        var db_response = await this.db.query("UPDATE services SET name_services = '" + this.args.name_services + "', price = '" + this.args.price + "' WHERE id = " + this.args.id + " RETURNING id")
        return db_response.rows
    }
}