"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_user_role = exports.user_role_table = void 0;
exports.user_role_table = {
    sql: "\n    DROP TABLE IF EXISTS user_roles;\n    CREATE TABLE user_roles (\n        id                  BIGSERIAL NOT NULL PRIMARY KEY,\n        name_role           VARCHAR(150) DEFAULT('')\n    );\n\n    COMMENT ON TABLE user_roles IS '\u0421\u0442\u0430\u0442\u0443\u0441\u044B \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438';\n    COMMENT ON COLUMN user_roles.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN user_roles.name_role IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u043E\u043B\u0438';\n    ",
    args: new Array()
};
exports.insert_user_role = {
    sql: "INSERT INTO user_roles(name_role) VALUES ($1), ($2)",
    args: ['Администратор', "Клиент"]
};
//# sourceMappingURL=user_roles.js.map