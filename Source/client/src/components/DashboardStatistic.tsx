import { type FC } from "react"
import { DashboardCard } from "./ui/DashboardCard"
import { PageTitle } from "./ui/PageTitle"
import { ClipLoader } from "react-spinners"
import type { User } from "../shared/types/user.types"

interface DashboardStatisticProps {
    users: User[] | null,
}

export const DashboardStatistic: FC<DashboardStatisticProps> = ({ users }) => {
    
    if(!users) {
        <ClipLoader/>
    }

    return (
        <div className="flex flex-col w-full">
            <PageTitle title="Статистика"/>
            <div className="grid grid-cols-3 gap-6 mb-8">
                <DashboardCard value={String(users?.length)} text={`New clients`}/>
                <DashboardCard value={String(Math.floor(users ? users?.length / 12 : 0))} text={`Client per month`}/>
                <DashboardCard value={String(users?.length)} text={`Satisfied clients`}/>
            </div>
        </div>
    )
}