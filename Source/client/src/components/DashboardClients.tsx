import { useEffect, type FC } from "react"
import { DashboardClientsList } from "./DashboardClientsList"
import { CustomSelect } from "./ui/CustomSelect"
import { CreateBtn } from "./ui/CreateBtn"
import { useMutation } from "@tanstack/react-query"
import { APICOMMAND } from "../shared/types/command.types"
import { api } from "../api/api"
import config from '../../../server/source/config/config.json'
import type { User } from "../shared/types/user.types"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setStatus } from "../redux/reducers/statusSlice"

interface DashboardClientsProps {
    clients: User[],
    setCurrentUserId: (id: string) => void,
}

export const DashboardClients: FC<DashboardClientsProps> = ({ clients, setCurrentUserId }) => {
    
    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.status.status)

    const {mutate} = useMutation({
        mutationFn: async () => {
            const response = await api(APICOMMAND.getStatus, {}, config)
        
            const responseData = await response.json()

            if(responseData.error) {
                throw new Error(`${responseData.error}`)
            }

            return responseData
        },
        onSuccess(data) {
            console.log(data)
            dispatch(setStatus(data.data))
        },
        onError(error) {
            throw new Error(`${error}`)
        }
    })

    useEffect(() => {
        mutate()
    }, [])

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-500 font-medium text-xl">
                    Клиенты
                </h2>
                <div className="flex items-center gap-6">
                    <CustomSelect optionText="Status" optionValues={status ? status : null}/>
                    <CreateBtn text="+ Создать клиента" modalType={'addClient'}/>
                </div>
            </div>
            <DashboardClientsList setCurrentUserId={setCurrentUserId} clients={clients}/>
        </>
    )
}