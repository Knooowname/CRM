import e from "express";
import { Users } from "../config/dbase/Users"
import { UserRoles } from "../config/dbase/UserRoles"
import { Status } from "../config/dbase/Status"
import { JobTitle } from "../config/dbase/JobTitle"
import { Services } from "../config/dbase/Services"
import { Access } from "../config/dbase/Access"
import { Events } from "../config/dbase/Events"


export async function router(body: any) {
    console.log(body);

    // JSON-объект данных ответа от сервера
    var res: any = {
        cmd: "",
        error: "",
        data: [],
    };

    var data: any;

    switch (body.cmd) {

        //------------------------------------------------------------------------ЗАПРОС НА АВТОРИЗАЦИЮ ПО ЛОГИНУ И ПАРОЛЮ
        case "Auth": {
            var u = new Users(body.args);
            data = await u.auth();
            return buildResponse(body.cmd, data, data ? null : "Такого пользователя не существует");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА РЕГИСТРАЦИЮ НОВЫХ ПОЛЬЗОВАТЕЛЕЙ СО СТОРОНЫ МАНАГЕРА 
        case "RegistNewUser": {
            var u = new Users(body.args);
            data = await u.regist();
            return buildResponse(body.cmd, data, data ? null : "Такой пользователь уже зарегистирован или ошибка при добавлении пользователя");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ИЗМЕНЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ
        case "EditDataUser": {
            var u = new Users(body.args);
            data = await u.edit()
            return buildResponse(body.cmd, data, data ? null : "Ошибка при редактированиии данных пользователя");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ИЗМЕНЕНИЕ ПАРОЛЯ ПОЛЬЗОВАТЕЛЯ
        case "EditPasswordUser": {
            var u = new Users(body.args);
            data = await u.change_pass()
            return buildResponse(body.cmd, data, data ? null : "Ошибка при редактированиии пароля пользователя");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ 
        case "GetAllUsers": {
            var u = new Users(body.args);
            data = await u.get_all_users()
            return buildResponse(body.cmd, data, data ? null : "Ошибка при получении всех пользователей");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛЬЗОВАТЕЛЬСКИХ РОЛЕЙ
        case "GetUserRoles": {
            var ur = new UserRoles(body.args);
            data = await ur.get_user_roles()
            return buildResponse(body.cmd, data, data ? null : "Ошибка при получении ролей пользователей");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ СТАТУСОВ 
        case "GetStatus": {
            var s = new Status(body.args);
            data = await s.get_status();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при получении статусов");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ДОБАВЛЕНИЕ СТАТУСОВ 
        case "AddNewStatus": {
            var s = new Status(body.args);
            data = await s.add_status();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при добавлении нового статуса");
        } break;
        //------------------------------------------------------------------------ИЗМЕНЕНИЕ ДАННЫХ СТАТУСОВ 
        case "EditStatus": {
            var s = new Status(body.args);
            data = await s.edit_status();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при редактированиии статуса");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ДОЛЖНОСТЕЙ
        case "GetJobTitle": {
            var jt = new JobTitle(body.args);
            data = await jt.get_job_title();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при получении должностей");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ДОБАВЛЕНИЕ ДОЛЖНОСТЕЙ
        case "AddNewJobTitle": {
            var jt = new JobTitle(body.args);
            data = await jt.add_job_title();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при добавлении новой должности");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ИЗМЕНЕНИЕ ДОЛЖНОСТЕЙ
        case "EditJobTitle": {
            var jt = new JobTitle(body.args);
            data = await jt.edit_job_title();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при редактированиии должности");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ УСЛУГ
        case "GetServices": {
            var ser = new Services(body.args);
            data = await ser.get_services();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при получении услуг");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ДОБАВЛЕНИЕ УСЛУГ
        case "AddNewService": {
            var ser = new Services(body.args);
            data = await ser.add_services();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при добавлении новой услуги");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ИЗМЕНЕНИЕ УСЛУГ
        case "EditService": {
            var ser = new Services(body.args);
            data = await ser.edit_services();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при редактировании услуги");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ ДОПОВ 
        case "GetAccess": {
            var a = new Access(body.args);
            data = await a.get_access();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при получении допов ПО");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ СОБЫТИЙ ДЛЯ ПОЛЬЗОВАТЕЛЯ СИСТЕМЫ
        case "GetEventsUser": {
            var e = new Events(body.args);
            data = await e.get_events_user();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при получении событий");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ПОЛУЧЕНИЕ СОБЫТИЙ ДЛЯ КЛИЕНТА СИСТЕМЫ
        case "GetEventsClient": {
            var e = new Events(body.args);
            data = await e.get_events_client();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при получении событий");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ДОБАВЛЕНИЕ СОБЫТИЙ
        case "AddNewEvent": {
            var e = new Events(body.args);
            data = await e.add_events();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при добавлении нового события");
        } break;
        //------------------------------------------------------------------------ЗАПРОС НА ИЗМЕНЕНИЕ СОБЫТИЙ
        case "EditEvent": {
            var e = new Events(body.args);
            data = await e.edit_events();
            return buildResponse(body.cmd, data, data ? null : "Ошибка при редактировании события");
        } break;

        //------------------------------------------------------------------------ДРУГИЕ КОДЫ, КОТОРЫЕ НЕ ПРОПИСАНЫ
        default: {
            return buildResponse(body.cmd, data, data ? null : `Команда "${body.cmd}" не распознана`);
        }

    }

}

function buildResponse(cmd: string, data: any = null, error: string | null = null): string {
    return JSON.stringify({
        cmd,
        data: data ?? null,
        error,
    });
}