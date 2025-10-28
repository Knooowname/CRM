import { type FC } from "react"
import type { Event } from "../shared/types/event.types"
import { ClipLoader } from "react-spinners"
import { DashboardEventsCard } from "./ui/DashboardEventsCard"
import type { Services } from "../shared/types/services.types"
import type { User } from "../shared/types/user.types"
import type { Status } from "../shared/types/status.types"

interface DashboardEventsListProps {
    events: Event[] | null,
    services: Services[] | null,
    users: User[] | null,
    status: Status[] | null,
}

export const DashboardEventsList: FC<DashboardEventsListProps> = ({ events, services, users, status }) => {
    
    if(!events || events.length === 0 && !services && !status && !users) {
        return <div><ClipLoader/></div>
    }

    return (
        <div className="max-h-full overflow-y-auto">
            <table className="w-full table-fixed">
                <tbody className="flex flex-col gap-4 max-h-full">
                    {events?.map((item, index) => {
                        
                        const filteredClient = users?.filter(client => client.id === item.client_id)
                        const filteredStatus = status?.filter(status => status.id === item.id_status)
                        const filteredServices = services?.filter(service => service.id === item.id_services)

                        return (
                            <tr key={index} className="w-full h-20 flex items-center justify-between py-2 px-4 border-1 border-gray-300 rounded-md">
                                <DashboardEventsCard  status={filteredStatus ? filteredStatus[0]?.name_status : ''} serviceName={filteredServices ? filteredServices[0]?.name_services : ''} eventEndDate={item.datetime_end_event} eventStartDate={item.datetime_start_event} nameClient={filteredClient ? filteredClient[0]?.first_name : ''} surnameClient={filteredClient ? filteredClient[0]?.last_name : ''}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}