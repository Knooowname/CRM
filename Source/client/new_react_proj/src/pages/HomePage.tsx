import { DashboardClients } from "../components/DashboardClients"
import { DashboardStatistic } from "../components/DashboardStatistic"
import { clientsData } from "../shared/constants/clientsData"
import { СalendarAndActivities } from "../components/СalendarAndActivities"

export const HomePage = () => {
    return (
        <div className="flex w-full h-full px-6 py-4">
            <div className="flex flex-col w-full min-w-300 max-w-300 pr-4">
                <DashboardStatistic />
                <DashboardClients data={clientsData} />
            </div>
            <div className="w-full">
                <СalendarAndActivities />
            </div>
        </div>
    )
}