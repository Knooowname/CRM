"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services_table = void 0;
exports.services_table = {
    sql: "\n    DROP TABLE IF EXISTS services;\n    CREATE TABLE services (\n        id                  BIGSERIAL NOT NULL PRIMARY KEY,\n        name_services       VARCHAR(150) DEFAULT(''),\n        price               VARCHAR(150) DEFAULT('')\n    );\n\n    COMMENT ON TABLE services IS '\u0423\u0441\u043B\u0443\u0433\u0438';\n    COMMENT ON COLUMN services.id IS '\u0418\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440';\n    COMMENT ON COLUMN services.name_services IS '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438';\n    COMMENT ON COLUMN services.price IS '\u0426\u0435\u043D\u0430 \u0443\u0441\u043B\u0443\u0433\u0438';\n    ",
    args: new Array()
};
//# sourceMappingURL=services.js.map