import type { Config } from "../shared/types/config.types"

export async function api(cmd: string, args: any, config?: Config) {
    try {
        return await fetch(`http://${config?.server_config.host}:${config?.server_config.port}/api`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "cmd": `${cmd}`,
                "args": args,
            })
        })
    } catch (error) {
        throw new Error(`${error}`)
    }
}



