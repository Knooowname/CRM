import { useMutation } from "@tanstack/react-query"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { useEffect, type FC } from "react"
import { setEvents } from "../redux/reducers/eventSlice"
import { DashboardStatistic } from "../components/DashboardStatistic"
import { СalendarAndActivities } from "../components/СalendarAndActivities"
import { DashboardEvents } from "../components/DashboardEvents"
import { setStatus } from "../redux/reducers/statusSlice"
import { setUsers } from "../redux/reducers/usersSlice"
import { setServices } from "../redux/reducers/servicesSlice"

export const HomePage: FC = () => {

    const dispatch = useAppDispatch()
    const reduxState = useAppSelector(state => state)
    const user = useAppSelector(state => state.user.user)

    const {mutate: loadEvents} = useMutation({
        mutationKey: ['events'],
        mutationFn: async () => {
            const args = {
                'user_id': `${user?.id}`
            }

            const response = await api(APICOMMAND.getEventsUser, args , config)
        
            const responseData = await response.json()

            if(responseData.error) {
                throw new Error(`${responseData.error}`)
            }
            return responseData
        },
        onSuccess(data) {
            dispatch(setEvents(data.data))
        },
        onError(error) {
            throw new Error(`${error}`)
        }
    })

    const {mutate: loadStatus} = useMutation({
        mutationKey: ['status'],
        mutationFn: async () => {
            const responseStatus = await api(APICOMMAND.getStatus, {}, config)
        
            const dataStatus = await responseStatus.json()

            if(dataStatus.error) {
                throw new Error(`${dataStatus.error}`)
            }

            return dataStatus
        },
        onSuccess(data) {
            dispatch(setStatus(data.data))
        },
        onError(error) {
            throw new Error(`${error}`)
        }
    })

    const {mutate: loadUsers} = useMutation({
        mutationKey: ['users'],
        mutationFn: async () => {
            const responseUsers = await api(APICOMMAND.getAllUsers, {}, config)

            const dataUsers = await responseUsers.json()

            if(dataUsers.error) {
                throw new Error(`${dataUsers.error}`)
            }

            return dataUsers
        },
        onSuccess(data) {
            dispatch(setUsers(data.data))
        },
        onError(error) {
            throw new Error(`${error}`)
        }
    })

    const {mutate: loadServices} = useMutation({
        mutationKey: ['services'],
        mutationFn: async () => {
            const responseServices = await api(APICOMMAND.getServices, {}, config)

            const dataServices = await responseServices.json()

            if(dataServices.error) {
                throw new Error(`${dataServices.error}`)
            }

            return dataServices
        },
        onSuccess(data) {
            dispatch(setServices(data.data))
        },
        onError(error) {
            throw new Error(`${error}`)
        }
    })

    useEffect(() => {
        loadEvents()
        loadStatus()
        loadUsers()
        loadServices()
    }, [])

    return (
        <div className="flex w-full h-[100vh] px-6 py-4 pb-0">
            <div className="flex flex-col w-full min-w-300 max-w-300 pr-4">
                <DashboardStatistic users={reduxState.users.users}/>
                <DashboardEvents status={reduxState.status.status} services={reduxState.services.services} users={reduxState.users.users} events={reduxState ? reduxState.events.events : null}/>
            </div>
            <div className="overflow-hidden">
                <СalendarAndActivities />
            </div>
        </div>
    )
}
