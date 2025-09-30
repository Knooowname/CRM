import { DashboardClientsList } from "../components/DashboardClientsList"
import { CreateBtn } from "../components/ui/CreateBtn"
import { PageTitle } from "../components/ui/PageTitle"
import { SearchInput } from "../components/ui/SearchInput"
import { CustomSelect } from "../components/ui/CustomSelect"
import { clientsData } from "../shared/constants/clientsData"
import { optionDateValues } from "../shared/constants/optionDateValues"
import { optionStatusValues } from "../shared/constants/optionStatusValues"

export const ClientsPage = () => {
    return (
        <div className="flex flex-col w-full h-full px-6 py-4 pb-0">
            <PageTitle title={'Clients'}/>
            <div className="flex justify-between items-center w-full mb-4">
                <SearchInput />
                <div className="flex items-center gap-6">
                    <CustomSelect optionText="Date" optionValues={optionDateValues}/>
                    <CustomSelect optionText="Status" optionValues={optionStatusValues}/>
                    <CreateBtn text="+ Create client" />
                </div>
            </div>
            <DashboardClientsList data={clientsData} />
        </div>
    )
}