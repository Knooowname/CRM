import type { FC } from "react"

interface AnalyticsCardProps {
    icon: string,
    title: string,
    value: string,
    descr: string,
}

export const AnalyticsCard: FC<AnalyticsCardProps> = ({ icon, title, value, descr }) => {
    return (
        // bg-[#6286ee]
        <div className="flex flex-col justify-between h-60 border-1 border-gray-300 rounded-xl w-full p-8 border-1 border-gray-100">
            <div style={{ backgroundImage: `url(${icon})` }} className={`bg-no-repeat bg-center bg-auto w-10 h-10 bg-gray-500 rounded-xl mb-6`}></div>
            <div className="flex flex-col gap-2">
                <span className="text-sm font-light text-gray-400">
                    {title}
                </span>
                <div className="flex items-center gap-4">
                    <p className="text-6xl font-medium text-[#6286ee]">
                        {value}
                    </p>
                    <p className="max-w-30 text-xl font-regular text-gray-400">
                        {descr}
                    </p>
                </div>
            </div>
        </div>
    )
}