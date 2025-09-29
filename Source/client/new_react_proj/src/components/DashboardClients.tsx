import type { FC } from "react"
import type { Client } from "../shared/types/clients.types"
import { Option } from "./ui/Option"
import { DashboardClientsList } from "./DashboardClientsList"

interface DashboardClientsProps {
    data: Client[]
}

export const DashboardClients: FC<DashboardClientsProps> = ({ data }) => {
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-500 font-medium text-xl">
                    Clients
                </h2>
                <div className="flex items-center gap-6">
                    <select name="Opt 1" className="w-45 h-10 border-1 border-gray-300 rounded-md">
                        <Option value="Approved"/>
                        <Option value="Need approve"/>
                        <Option value="New"/>
                        <Option value="Refused"/>
                    </select>
                    <button className="h-10 w-35 bg-red-400 rounded-md">
                        + Create client
                    </button>
                </div>
            </div>
            <DashboardClientsList data={data}/>
        </>
    )
}