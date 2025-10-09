export type ConfigDB = {
    database: string,
    host: string,
    password: string,
    port: number,
    user: string
}

export type ConfigServer = {
    host: string,
    port: string,
}

export type Config = {
    config_db: ConfigDB,
    crypto_code: string,
    server_config: ConfigServer
}