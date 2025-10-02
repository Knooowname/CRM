"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_access = exports.access_table = void 0;
exports.access_table = {
    sql: "\n    DROP TABLE IF EXISTS access;\n    CREATE TABLE access (\n        id                  BIGSERIAL NOT NULL PRIMARY KEY,\n        name_access           VARCHAR(150) DEFAULT('')\n    );\n\n    COMMENT ON TABLE access IS '\u041E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441\u0438\u0441\u0442\u0435\u043C\u044B';\n    COMMENT ON COLUMN access.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN access.name_access IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432';\n    ",
    args: new Array()
};
exports.insert_access = {
    sql: "INSERT INTO access(name_access) VALUES ($1), ($2)",
    args: ['Оказание услуг', "Планировщик"]
};
//# sourceMappingURL=access.js.map