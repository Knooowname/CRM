import type { FC } from "react"

interface DashboardClientsCardProps {
    img: string,
    name: string,
    surname: string,
    recordingDate: string,
    recordingTime: string,
    status: 'Approved' | 'Need approve' | 'New' | 'Refused',
}

export const DashboardClientsCard: FC<DashboardClientsCardProps> = ({ img, name, surname, status, recordingDate, recordingTime }) => {
    return (
        <>
            <td className="flex gap-2 items-center w-[20%]">
                <div className={`bg-[url(${img})] bg-no-repeat bg-center bg-auto w-10 h-10 rounded-4xl bg-gray-300`}></div>
                <div>
                    <p className="text-[#333]">
                        {name + ' ' + surname}
                    </p>
                </div>
            </td>
            <td className="flex flex-col gap-0.5 w-[20%]">
                <span className="text-gray-400 font-light text-sm">
                    Date
                </span>
                <p className="text-[#333]">
                    {recordingDate}
                </p>
            </td>
            <td className="flex flex-col gap-0.5 w-[20%]">
                <span className="text-gray-400 font-light text-sm">
                    Time
                </span>
                <p className="text-[#333]">
                    {recordingTime}
                </p>
            </td>
            <td className="flex flex-col gap-0.5 w-[20%]">
                <span className="text-gray-400 font-light text-sm">
                    Status
                </span>
                <p className={`${status === 'Approved' ? 'text-[#6fbe64]' : status === 'Need approve' ? 'text-[#e4dd73]' : status === 'New' ? 'text-[#62b3de]' : 'text-[#d04547]'}`}>
                    {status}
                </p>
            </td>
            <button className="text-[#6286ee] cursor-pointer">
                Details →
            </button>
        </>
    )
}