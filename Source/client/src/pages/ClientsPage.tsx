import { DashboardClientsList } from "../components/DashboardClientsList"
import { PageTitle } from "../components/ui/PageTitle"
import { useMutation } from "@tanstack/react-query"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setUsers } from "../redux/reducers/usersSlice"
import { useEffect, useMemo, useState, type FC } from "react"
import { ClientsFilterContainer } from "../components/ui/ClientsFilterContainer"

interface ClientsPageProps {
    setCurrentUserId: (id: string) => void
}

export const ClientsPage: FC<ClientsPageProps> = ({ setCurrentUserId }) => {
    
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users.users)
    const [errorMess, setErrorMess] = useState<string | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')

    const filteredUsers = useMemo(() => {
        const filteredUsersForName = users?.filter(user => user.first_name.includes(searchValue))

        return filteredUsersForName
    }, [searchValue])

    const {mutate} = useMutation({
        mutationKey: ['users'],
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
            setErrorMess(`${error}`)
        }
    })

    useEffect(() => {
        mutate()
    }, [])

    return (
        <div className="flex flex-col w-full h-full px-6 py-4 pb-0">
            <PageTitle title={'Clients'}/>
            <ClientsFilterContainer setSearchValue={setSearchValue}/>
            {users ? <DashboardClientsList setCurrentUserId={setCurrentUserId} clients={filteredUsers && filteredUsers.length !== 0 ? filteredUsers : users} /> : errorMess}
        </div>
    )
}