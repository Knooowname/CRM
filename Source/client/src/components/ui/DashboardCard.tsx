import type { FC } from "react"

interface DashboardCardProps {
    value: string,
    text: string,
}

export const DashboardCard: FC<DashboardCardProps> = ({ value, text }) => {
    return (
        <div className="flex items-center justify-center gap-6 min-h-10 border-1 border-gray-300 w-full rounded-md p-4">
            <div className="w-25 h-25 bg-gray-600 rounded-lg"></div>
            <div className="flex flex-col gap-2">
                <h2 className="text-gray-700 text-2xl font-semibold">
                    {value}
                </h2>
                <p className="text-gray-400 text-md font-regular">
                    {text}
                </p>
            </div>
        </div>
    )
}