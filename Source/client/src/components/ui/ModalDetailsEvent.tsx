import type { FC } from "react"

interface ModalDetailsEventProps {
    userName: string,
    userSurname: string,
    clientName: string,
    clientSurname: string,
    dateStartEvent: string,
    dateEndEvent: string,
    nameService: string,
    priceService: string,
    statusName: string,
    info: string
}

export const ModalDetailsEvent: FC<ModalDetailsEventProps> = ({ userName, userSurname, clientName, clientSurname, dateEndEvent, dateStartEvent, nameService, priceService, statusName, info }) => {
    return (
        <>

        </>
    )
}