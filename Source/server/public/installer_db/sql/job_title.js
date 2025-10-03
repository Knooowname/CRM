"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert_job_title = exports.job_title_table = void 0;
exports.job_title_table = {
    sql: "\n    DROP TABLE IF EXISTS job_title;\n    CREATE TABLE job_title (\n        id                  BIGSERIAL NOT NULL PRIMARY KEY,\n        name_job_title      VARCHAR(150) DEFAULT('')\n    );\n\n    COMMENT ON TABLE job_title IS '\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438';\n    COMMENT ON COLUMN job_title.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN job_title.name_job_title IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438';\n    ",
    args: new Array()
};
exports.insert_job_title = {
    sql: "INSERT INTO job_title(name_job_title) \n    VALUES ($1)",
    args: ['Администратор']
};
//# sourceMappingURL=job_title.js.map