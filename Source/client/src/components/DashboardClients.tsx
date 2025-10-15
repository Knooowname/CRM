import type { FC } from "react"
import { DashboardClientsList } from "./DashboardClientsList"
import { CustomSelect } from "./ui/CustomSelect"
import { CreateBtn } from "./ui/CreateBtn"
import { optionStatusValues } from "../shared/constants/optionStatusValues"
import { useMutation } from "@tanstack/react-query"
import type { RegisterFormType } from "../validations/registerFormSchema"
import { APICOMMAND } from "../shared/types/command.types"
import { api } from "../api/api"
import config from '../../../server/source/config/config.json'
import type { User } from "../shared/types/user.types"

interface DashboardClientsProps {
    clients: User[]
}

export const DashboardClients: FC<DashboardClientsProps> = ({ clients }) => {
    
    // const {mutate, isPending} = useMutation({
    //     mutationFn: async (userData: RegisterFormType) => {
    //         const response = await api(APICOMMAND.registNewUser, userData, config)
        
    //         const responseData = await response.json()

    //         if(responseData.error) {
    //             throw new Error(`${responseData.error}`)
    //         }

    //         return responseData
    //     }
    // })

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-500 font-medium text-xl">
                    Клиенты
                </h2>
                <div className="flex items-center gap-6">
                    <CustomSelect optionText="Status" optionValues={optionStatusValues}/>
                    <CreateBtn text="+ Создать клиента"/>
                </div>
            </div>
            <DashboardClientsList clients={clients}/>
        </>
    )
}