import type { FC } from "react"

interface ServicesCardProps {
    serviceName: string,
    servicePrice: string,
    dateLastChange: string,
}

export const ServicesCard: FC<ServicesCardProps> = ({ serviceName, servicePrice, dateLastChange }) => {
    return (
        <>
            <td className="flex flex-col gap-0.5 w-[20%]">
                <span className="text-gray-400 font-light text-sm">
                    Name
                </span>
                <p className="text-[#333]">
                    {serviceName}
                </p>
            </td>
            <td className="flex flex-col gap-0.5 w-[20%]">
                <span className="text-gray-400 font-light text-sm">
                    Price
                </span>
                <p className="text-[#333]">
                    {servicePrice}
                </p>
            </td>
            <td className="flex flex-col gap-0.5 w-[20%]">
                <span className="text-gray-400 font-light text-sm">
                    Date last change
                </span>
                <p className="text-[#333]">
                    {dateLastChange}
                </p>
            </td>
            <td className="flex items-center gap-4">
                <button className="cursor-pointer w-6 h-6">
                    ✎
                </button>
                <button className="cursor-pointer w-6 h-6">
                    🗑️
                </button>
            </td>
        </>
    )
}