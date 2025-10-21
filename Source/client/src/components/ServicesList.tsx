import type { FC } from "react"
import type { Service } from "../shared/types/servicesData.types"
import { ServicesCard } from "./ui/ServicesCard"

interface ServicesListProps {
    data: Service[],
}

export const ServicesList: FC<ServicesListProps> = ({ data }) => {
    return (
        <div className="max-h-full overflow-y-auto">
            <table className="w-full table-fixed">
                <tbody className="flex flex-col gap-4 max-h-full">
                    {data.map((item) => (
                        <tr key={item.id} className="w-full h-20 flex items-center justify-between py-2 px-4 border-1 border-gray-300 rounded-md">
                            <ServicesCard serviceName={item.name} servicePrice={item.price} dateLastChange={item.dateLastChange}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}