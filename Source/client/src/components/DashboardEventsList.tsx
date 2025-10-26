import type { FC } from "react"
import type { Event } from "../shared/types/event.types"
import { ClipLoader } from "react-spinners"
import { DashboardEventsCard } from "./ui/DashboardEventsCard"
import type { Services } from "../shared/types/services.types"
import type { User } from "../shared/types/user.types"

interface DashboardEventsListProps {
    events: Event[] | null,
    services: Services[] | null,
    users: User[] | null,
}

export const DashboardEventsList: FC<DashboardEventsListProps> = ({ events, services, users }) => {
    if(!events || events.length === 0) {
        return <div><ClipLoader/></div>
    }

    return (
        <div className="max-h-full overflow-y-auto">
            <table className="w-full table-fixed">
                <tbody className="flex flex-col gap-4 max-h-full">
                    {events?.map((item, index) => {
                        
                        const filteredClient = users?.filter(client => client.id === item.client_id)

                        return (
                            <tr key={index} className="w-full h-20 flex items-center justify-between py-2 px-4 border-1 border-gray-300 rounded-md">
                                <DashboardEventsCard />
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}