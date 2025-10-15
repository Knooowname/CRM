import { DashboardClients } from "../components/DashboardClients"
import { DashboardStatistic } from "../components/DashboardStatistic"
import { clientsData } from "../shared/constants/clientsData"
import { СalendarAndActivities } from "../components/СalendarAndActivities"
import { useMutation } from "@tanstack/react-query"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setUsers } from "../redux/reducers/usersSlice"
import { useEffect } from "react"

export const HomePage = () => {

    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users.users)

    const {mutate} = useMutation({
        mutationFn: async () => {
            const response = await api(APICOMMAND.getAllUsers, {}, config)
        
            const responseData = await response.json()

            if(responseData.error) {
                throw new Error(`${responseData.error}`)
            }
            return responseData
        },
        onSuccess(data) {
            dispatch(setUsers(data.data))
        },
        onError(error) {
            throw new Error(`${error}`)
        }
    })

    useEffect(() => {
        mutate()
    }, [])

    return (
        <div className="flex w-full h-full px-6 py-4 pb-0">
            <div className="flex flex-col w-full min-w-300 max-w-300 pr-4">
                <DashboardStatistic clients={users ? users : []}/>
                <DashboardClients clients={users ? users : []} />
            </div>
            <div className="overflow-hidden">
                <СalendarAndActivities />
            </div>
        </div>
    )
}
