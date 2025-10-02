import { DBase, getDB } from "./DBase";
import config from "../config.json";
import { dateTimeToSQL, dateTimeToStr } from "./DateStr";


export class UserRoles {
    db: DBase;
    args: any;
    constructor(_args: any) {
        this.db = getDB();
        this.args = _args;
    }

    async get_user_roles() {
        var db_response = await this.db.query("SELECT * FROM user_roles")
        if (db_response.rows.length !== 0) {
            return db_response.rows
        }
        else { return null }
    }


}