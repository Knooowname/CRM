"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status_table = void 0;
exports.status_table = {
    sql: "\n    DROP TABLE IF EXISTS status;\n    CREATE TABLE status (\n        id                  BIGSERIAL NOT NULL PRIMARY KEY,\n        name_status         VARCHAR(150) DEFAULT('')\n        \n    );\n\n    COMMENT ON TABLE status IS '\u0421\u0442\u0430\u0442\u0443\u0441\u044B \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438';\n    COMMENT ON COLUMN status.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN status.name_status IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430';\n    ",
    args: new Array()
};
//# sourceMappingURL=status.js.map