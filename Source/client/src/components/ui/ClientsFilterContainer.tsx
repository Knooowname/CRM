import type { FC } from "react"
import { SearchInput } from "./SearchInput"
import { CustomSelect } from "./CustomSelect"
import { CreateBtn } from "./CreateBtn"
import { optionDateValues } from "../../shared/constants/optionDateValues"
import { useAppSelector } from "../../redux/hooks"

interface ClientsFilterContainerProps {
    setSearchValue: (value: string) => void
}

export const ClientsFilterContainer: FC<ClientsFilterContainerProps> = ({ setSearchValue }) => {
    
    const status = useAppSelector(state => state.status.status)

    return (
        <div className="flex justify-between items-center w-full mb-4">
            <SearchInput setSearchString={setSearchValue} />
            <div className="flex items-center gap-6">
                <CustomSelect optionText="Date" optionValues={optionDateValues} />
                <CustomSelect optionText="Status" optionValues={status} />
                <CreateBtn modalType={'addClient'} text="+ Create client" />
            </div>
        </div>
    )
}
