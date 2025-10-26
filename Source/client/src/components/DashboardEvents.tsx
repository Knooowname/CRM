import { useEffect, type FC } from "react"
import type { Event } from "../shared/types/event.types"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { useMutation } from "@tanstack/react-query"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'
import { setStatus } from "../redux/reducers/statusSlice"
import { CustomSelect } from "./ui/CustomSelect"
import { CreateBtn } from "./ui/CreateBtn"
import { DashboardEventsList } from "./DashboardEventsList"
import type { Status } from "../shared/types/status.types"
import type { User } from "../shared/types/user.types"
import type { Services } from "../shared/types/services.types"

interface DashboardEventsProps {
    events: Event[] | null,
    status: Status[] | null,
    users: User[] | null,
    services: Services[] | null,
}

export const DashboardEvents: FC<DashboardEventsProps> = ({ events, status, services, users }) => {
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-500 font-medium text-xl">
                    Ивенты
                </h2>
                <div className="flex items-center gap-6">
                    <CustomSelect optionText="Status" optionValues={status ? status : null}/>
                    <CreateBtn text="+ Создать ивент" modalType={'addClient'}/>
                </div>
            </div>
            <DashboardEventsList events={events} users={users} services={services}/>
        </>
    )
}