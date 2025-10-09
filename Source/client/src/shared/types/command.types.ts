export enum APICOMMAND {
    // Авторизация пользователя
    auth = 'Auth',

    // Регистрация пользователя
    registNewUser = 'RegistNewUser',

    //
    editDataUser = 'EditDataUser',

    //
    editPasswordUser = 'EditPasswordUser',

    // Получение всех пользователей
    getAllUsers = 'GetAllUsers',

    // Получение ролей пользователей
    getUserRoles = 'GetUserRoles',

    // Получение статуса
    getStatus = 'GetStatus',

    // Добавление нового статуса
    addNewStatus = 'AddNewStatus',

    // 
    editStatus = 'EditStatus',

    // Получение заголовка
    getJobTitle = 'GetJobTitle',

    // Добавление нового заголовка
    addNewJobTitle = 'AddNewJobTitle',

    // Изменение заголовка 
    editJobTitle = 'EditJobTitle',

    // Получение услуг
    getServices = 'GetServices',

    // Добавление новой услуги
    addNewServices = 'AddNewService',

    //Изменение услуги
    editServices = 'EditService',

    //
    getAccess = 'GetAccess',

    //
    getEventsUser = 'GetEventsUser',

    //
    getEventsClient = 'GetEventsClient',

    //
    addNewEvent = 'AddNewEvent',

    //
    editEvent = 'EditEvent',
}