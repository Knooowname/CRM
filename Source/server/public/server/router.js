"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = router;
var Users_1 = require("../config/dbase/Users");
var UserRoles_1 = require("../config/dbase/UserRoles");
var Status_1 = require("../config/dbase/Status");
var JobTitle_1 = require("../config/dbase/JobTitle");
var Services_1 = require("../config/dbase/Services");
var Access_1 = require("../config/dbase/Access");
var Events_1 = require("../config/dbase/Events");
function router(body) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, _a, u, u, u, u, u, ur, s, s, s, jt, jt, jt, ser, ser, ser, a, e, e, e, e;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(body);
                    res = {
                        cmd: "",
                        error: "",
                        data: [],
                    };
                    _a = body.cmd;
                    switch (_a) {
                        case "Auth": return [3, 1];
                        case "RegistNewUser": return [3, 3];
                        case "EditDataUser": return [3, 5];
                        case "EditPasswordUser": return [3, 7];
                        case "GetAllUsers": return [3, 9];
                        case "GetUserRoles": return [3, 11];
                        case "GetStatus": return [3, 13];
                        case "AddNewStatus": return [3, 15];
                        case "EditStatus": return [3, 17];
                        case "GetJobTitle": return [3, 19];
                        case "AddNewJobTitle": return [3, 21];
                        case "EditJobTitle": return [3, 23];
                        case "GetServices": return [3, 25];
                        case "AddNewService": return [3, 27];
                        case "EditService": return [3, 29];
                        case "GetAccess": return [3, 31];
                        case "GetEventsUser": return [3, 33];
                        case "GetEventsClient": return [3, 35];
                        case "AddNewEvent": return [3, 37];
                        case "EditEvent": return [3, 39];
                    }
                    return [3, 41];
                case 1:
                    u = new Users_1.Users(body.args);
                    return [4, u.auth()];
                case 2:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Такого пользователя не существует")];
                case 3:
                    u = new Users_1.Users(body.args);
                    return [4, u.regist()];
                case 4:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Такой пользователь уже зарегистирован или ошибка при добавлении пользователя")];
                case 5:
                    u = new Users_1.Users(body.args);
                    return [4, u.edit()];
                case 6:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при редактированиии данных пользователя")];
                case 7:
                    u = new Users_1.Users(body.args);
                    return [4, u.change_pass()];
                case 8:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при редактированиии пароля пользователя")];
                case 9:
                    u = new Users_1.Users(body.args);
                    return [4, u.get_all_users()];
                case 10:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при получении всех пользователей")];
                case 11:
                    ur = new UserRoles_1.UserRoles(body.args);
                    return [4, ur.get_user_roles()];
                case 12:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при получении ролей пользователей")];
                case 13:
                    s = new Status_1.Status(body.args);
                    return [4, s.get_status()];
                case 14:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при получении статусов")];
                case 15:
                    s = new Status_1.Status(body.args);
                    return [4, s.add_status()];
                case 16:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при добавлении нового статуса")];
                case 17:
                    s = new Status_1.Status(body.args);
                    return [4, s.edit_status()];
                case 18:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при редактированиии статуса")];
                case 19:
                    jt = new JobTitle_1.JobTitle(body.args);
                    return [4, jt.get_job_title()];
                case 20:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при получении должностей")];
                case 21:
                    jt = new JobTitle_1.JobTitle(body.args);
                    return [4, jt.add_job_title()];
                case 22:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при добавлении новой должности")];
                case 23:
                    jt = new JobTitle_1.JobTitle(body.args);
                    return [4, jt.edit_job_title()];
                case 24:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при редактированиии должности")];
                case 25:
                    ser = new Services_1.Services(body.args);
                    return [4, ser.get_services()];
                case 26:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при получении услуг")];
                case 27:
                    ser = new Services_1.Services(body.args);
                    return [4, ser.add_services()];
                case 28:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при добавлении новой услуги")];
                case 29:
                    ser = new Services_1.Services(body.args);
                    return [4, ser.edit_services()];
                case 30:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при редактировании услуги")];
                case 31:
                    a = new Access_1.Access(body.args);
                    return [4, a.get_access()];
                case 32:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при получении допов ПО")];
                case 33:
                    e = new Events_1.Events(body.args);
                    return [4, e.get_events_user()];
                case 34:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при получении событий")];
                case 35:
                    e = new Events_1.Events(body.args);
                    return [4, e.get_events_client()];
                case 36:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при получении событий")];
                case 37:
                    e = new Events_1.Events(body.args);
                    return [4, e.add_events()];
                case 38:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при добавлении нового события")];
                case 39:
                    e = new Events_1.Events(body.args);
                    return [4, e.edit_events()];
                case 40:
                    data = _b.sent();
                    return [2, buildResponse(body.cmd, data, data ? null : "Ошибка при редактировании события")];
                case 41:
                    {
                        return [2, buildResponse(body.cmd, data, data ? null : "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \"".concat(body.cmd, "\" \u043D\u0435 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u0430"))];
                    }
                    _b.label = 42;
                case 42: return [2];
            }
        });
    });
}
function buildResponse(cmd, data, error) {
    if (data === void 0) { data = null; }
    if (error === void 0) { error = null; }
    return JSON.stringify({
        cmd: cmd,
        data: data !== null && data !== void 0 ? data : null,
        error: error,
    });
}
//# sourceMappingURL=router.js.map