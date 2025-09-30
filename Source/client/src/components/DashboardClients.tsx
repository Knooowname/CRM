import type { FC } from "react"
import type { Client } from "../shared/types/clients.types"
import { DashboardClientsList } from "./DashboardClientsList"
import { CustomSelect } from "./ui/CustomSelect"
import { CreateBtn } from "./ui/CreateBtn"
import { optionStatusValues } from "../shared/constants/optionStatusValues"

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
                    <CustomSelect optionText="Status" optionValues={optionStatusValues}/>
                    <CreateBtn text="+ Create client"/>
                </div>
            </div>
            <DashboardClientsList data={data}/>
        </>
    )
}