import { type FC } from "react"
import { DashboardClientsCard } from "./ui/DashboardClientsCard"
import type { User } from "../shared/types/user.types"
import { ClipLoader } from "react-spinners"

interface DashboardClientsListProps {
    clients: User[],
    setCurrentUserId: (id: string) => void,
}

export const DashboardClientsList: FC<DashboardClientsListProps> = ({ clients, setCurrentUserId }) => {
    
    if(!clients || clients.length === 0) {
        return <div><ClipLoader/></div>
    }

    return (
        <div className="max-h-full overflow-y-auto">
            <table className="w-full table-fixed">
                <tbody className="flex flex-col gap-4 max-h-full">
                    {clients?.map((item, index) => (
                        <tr key={index} className="w-full h-20 flex items-center justify-between py-2 px-4 border-1 border-gray-300 rounded-md">
                            <DashboardClientsCard setCurrentUserId={setCurrentUserId} id={item.id} img={''} name={item.first_name} surname={item.last_name} recordingTime={item.date_create} status={'Need approve'} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}