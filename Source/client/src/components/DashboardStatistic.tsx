import { useEffect, type FC } from "react"
import { DashboardCard } from "./ui/DashboardCard"
import { PageTitle } from "./ui/PageTitle"
import type { User } from "../shared/types/user.types"
import { useMutation } from "@tanstack/react-query"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'

interface DashboardStatisticProps {
    clients: User[]
}

export const DashboardStatistic: FC<DashboardStatisticProps> = ({ clients }) => {
    
    return (
        <div className="flex flex-col w-full">
            <PageTitle title="Статистика"/>
            <div className="grid grid-cols-3 gap-6 mb-8">
                <DashboardCard value={String(clients.length)} text={`New clients`}/>
                <DashboardCard value={String(Math.floor(clients.length / 12))} text={`Client per month`}/>
                <DashboardCard value={String(clients.length)} text={`Satisfied clients`}/>
            </div>
        </div>
    )
}