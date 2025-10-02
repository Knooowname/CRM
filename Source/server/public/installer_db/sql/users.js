"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_user = exports.users_table = void 0;
var crypto_1 = __importDefault(require("crypto"));
var config_json_1 = __importDefault(require("../../config/config.json"));
var DateStr_1 = require("../../config/dbase/DateStr");
exports.users_table = {
    sql: "\n    DROP TABLE IF EXISTS users;\n    CREATE TABLE users (\n        id                  BIGSERIAL NOT NULL PRIMARY KEY,\n        last_name           VARCHAR(150) DEFAULT(''),\n        first_name          VARCHAR(150) DEFAULT(''),\n        phone               VARCHAR(50) DEFAULT (''),\n        date_create         TIMESTAMP DEFAULT(CURRENT_TIMESTAMP),\n        email               TEXT DEFAULT(''),\n        password            TEXT DEFAULT(''),\n        user_role_id        BIGINT DEFAULT(0),\n        job_title_id        BIGINT DEFAULT(0)\n    );\n\n    COMMENT ON TABLE users IS '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438';\n    COMMENT ON COLUMN users.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN users.last_name IS '\u0424\u0430\u043C\u0438\u043B\u0438\u044F';\n    COMMENT ON COLUMN users.first_name IS '\u0418\u043C\u044F';\n    COMMENT ON COLUMN users.phone IS '\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430';\n    COMMENT ON COLUMN users.date_create IS '\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0430\u0440\u0446\u0438\u0438';\n    COMMENT ON COLUMN users.email IS '\u041F\u043E\u0447\u0442\u0430/\u041B\u043E\u0433\u0438\u043D';\n    COMMENT ON COLUMN users.password IS '\u041F\u0430\u0440\u043E\u043B\u044C';\n    COMMENT ON COLUMN users.user_role_id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0440\u043E\u043B\u0438';\n    COMMENT ON COLUMN users.job_title_id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438';\n    ",
    args: new Array()
};
exports.insert_user = {
    sql: "INSERT INTO users(last_name, first_name, phone, date_create, email, password, user_role_id, job_title_id) \n    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    args: ['admin', 'admin', '+7(900)000-00-00', (0, DateStr_1.dateTimeToSQL)(new Date(Date.now())), 'admin', crypto_1.default.createHmac('sha256', config_json_1.default.crypto_code).update('admin').digest('hex'), 1, 1]
};
//# sourceMappingURL=users.js.map