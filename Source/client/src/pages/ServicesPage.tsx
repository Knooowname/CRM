import { ServicesList } from "../components/ServicesList"
import { PageTitle } from "../components/ui/PageTitle"
import { SearchInput } from "../components/ui/SearchInput"
import { CustomSelect } from "../components/ui/CustomSelect"
import { servicesData } from "../shared/constants/servicesData"
import { optionPriceValues } from "../shared/constants/optionPriceValues"
import { CreateBtn } from "../components/ui/CreateBtn"

export const ServicesPage = () => {
    return (
        <div className="flex flex-col w-full h-full px-6 py-4 pb-0">
            <PageTitle title="Services"/>
            <div className="flex items-center justify-between w-full mb-4">
                <SearchInput/>
                <div className="flex items-center gap-6">
                    <CustomSelect optionText="Price" optionValues={optionPriceValues} />
                    <CreateBtn text="+ Create service"/>
                </div>
            </div>
            <ServicesList data={servicesData}/>
        </div>
    )
}