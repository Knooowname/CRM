import { DashboardClientsList } from "../components/DashboardClientsList"
import { CreateBtn } from "../components/ui/CreateBtn"
import { PageTitle } from "../components/ui/PageTitle"
import { SearchInput } from "../components/ui/SearchInput"
import { CustomSelect } from "../components/ui/CustomSelect"
import { optionDateValues } from "../shared/constants/optionDateValues"
import { optionStatusValues } from "../shared/constants/optionStatusValues"
import { useMutation } from "@tanstack/react-query"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { setUsers } from "../redux/reducers/usersSlice"
import { useEffect, useState, type FC } from "react"

interface ClientsPageProps {
    setCurrentUserId: (id: string) => void
}

export const ClientsPage: FC<ClientsPageProps> = ({ setCurrentUserId }) => {
    
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users.users)
    const [errorMess, setErrorMess] = useState<string | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')

    const filteredUsers = users?.filter(user => user.first_name.includes(searchValue))

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

    useEffect(() => {
        console.log(filteredUsers)
    }, [searchValue])

    return (
        <div className="flex flex-col w-full h-full px-6 py-4 pb-0">
            <PageTitle title={'Clients'}/>
            <div className="flex justify-between items-center w-full mb-4">
                <SearchInput setSearchString={setSearchValue}/>
                <div className="flex items-center gap-6">
                    <CustomSelect optionText="Date" optionValues={optionDateValues}/>
                    <CustomSelect optionText="Status" optionValues={optionStatusValues}/>
                    <CreateBtn modalType={'addClient'} text="+ Create client" />
                </div>
            </div>
            {users ? <DashboardClientsList setCurrentUserId={setCurrentUserId} clients={filteredUsers && filteredUsers.length !== 0 ? filteredUsers : []} /> : errorMess}
        </div>
    )
}