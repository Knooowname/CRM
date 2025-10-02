import { DBase, getDB } from "./DBase";
import crypto from "crypto";
import config from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";

export class Users {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async auth() {
        var pass = crypto
            .createHmac("sha256", config.crypto_code)
            .update(this.args.password)
            .digest("hex");
        var db_response = await this.db.query("SELECT id, last_name, first_name, phone, date_create, email, password, user_role_id, job_title_id " +
            "FROM users WHERE email = '" + this.args.email + "' AND password = '" + pass + "'")
        return db_response.rows
    }

    async regist() {
        var pass = crypto
            .createHmac("sha256", config.crypto_code)
            .update(this.args.password)
            .digest("hex");
        var db_response = await this.check_user();
        if (db_response.rows[0] === undefined) {
            db_response = await this.db.query("INSERT INTO users(last_name, first_name, phone, date_create, email, password, user_role_id, job_title_id) VALUES " +
                "('" + this.args.last_name + "', '" + this.args.first_name + "', '" + this.args.phone + "', '" + dateTimeToSQL(new Date(Date.now())) + "', '" + this.args.email + "', " +
                "'" + pass + "', " + this.args.user_role_id + ", " + this.args.job_title_id + ") RETURNING id")
            return db_response.rows
        }
        else {
            return null
        }
    }

    async edit() {
        var db_response = await this.check_user();
        if (db_response.rows[0] !== undefined) {
            db_response = await this.db.query("UPDATE users SET last_name = '" + this.args.last_name + "', first_name = '" + this.args.first_name + "', " +
                "phone = '" + this.args.phone + "', user_role_id = " + this.args.user_role_id + ", job_title_id = " + this.args.job_title_id + " where id = " + db_response.rows[0].id + " RETURNING id")
            return db_response.rows
        }
        else { return null }
    }

    async change_pass() {
        var pass = crypto
            .createHmac("sha256", config.crypto_code)
            .update(this.args.password)
            .digest("hex");
        var db_response = await this.check_user();
        if (db_response.rows[0] !== undefined) {
            db_response = await this.db.query("UPDATE users SET password = '" + pass + "' where id = " + db_response.rows[0].id + " RETURNING id")
            return db_response.rows
        }
        else { return null }
    }

    async get_all_users() {
        var db_response = await this.db.query("SELECT id, last_name, first_name, phone, date_create, email, password, user_role_id, job_title_id FROM users")
        if (db_response.rows.length !== 0) {
            return db_response.rows
        }
        else{return null}
    }

    async check_user() {
        var db_response = await this.db.query("SELECT id FROM users WHERE email = '" + this.args.email + "'")
        return db_response
    }
}
