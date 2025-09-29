import { DashboardCard } from "./ui/DashboardCard"

export const DashboardStatistic = () => {
    return (
        <div className="flex flex-col w-full">
            <h1 className="text-gray-500 font-medium text-2xl mb-4">
                Dashboard
            </h1>
            <div className="grid grid-cols-3 gap-6 mb-8">
                <DashboardCard value={`3201`} text={`New clients`}/>
                <DashboardCard value={`303`} text={`Client per month`}/>
                <DashboardCard value={`2301`} text={`Satisfied clients`}/>
            </div>
        </div>
    )
}