import type { FC } from "react"
import type { Client } from "../shared/types/clients.types"
import { DashboardClientsCard } from "./ui/DashboardClientsCard"

interface DashboardClientsListProps {
    data: Client[]
}

export const DashboardClientsList: FC<DashboardClientsListProps> = ({ data }) => {
    return (
        <div className="max-h-full overflow-y-auto">
            <table className="w-full table-fixed">
                <tbody className="flex flex-col gap-4 max-h-full">
                    {data.map((item, index) => (
                        <tr key={index} className="w-full h-20 flex items-center justify-between py-2 px-4 border-1 border-gray-300 rounded-md">
                            <DashboardClientsCard img={item.img} name={item.name} surname={item.surname} recordingDate={item.recordingDate} recordingTime={item.recordingTime} status={item.status} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}