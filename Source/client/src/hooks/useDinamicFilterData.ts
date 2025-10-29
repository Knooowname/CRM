import { useMemo } from "react";
import { useAppSelector } from "../redux/hooks";
import type { Event } from "../shared/types/event.types";

export function useDinamicFilterData(event: Event | null) {

    const { users, services, status } = useAppSelector(state => ({
        users: state.users.users,
        services: state.services.services,
        status: state.status.status
    }))

    const result = useMemo(() => {
        if (!event) {
            return {
                currentEventUser: null,
                currentEventClient: null,
                currentEventService: null,
                currentEventStatus: null,
            }
        }

        const currentEventUser = users?.find(user => user.id === event.user_id)
        const currentEventClient = users?.find(user => user.id === event.client_id)
        const currentEventService = services?.find(service => service.id === event.id_services)
        const currentEventStatus = status?.find(status => status.id === event.id_status)

        return {
            currentEventUser,
            currentEventClient,
            currentEventService,
            currentEventStatus
        }

    }, [event, users, services, status])


    return result
} 