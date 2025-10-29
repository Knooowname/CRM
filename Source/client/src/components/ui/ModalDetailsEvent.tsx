import type { FC } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { closeModal } from "../../redux/reducers/modalSlice"

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

    const dispatch = useAppDispatch()

    const localStartDate = new Date(dateStartEvent).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    const localEndDate = new Date(dateEndEvent).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="absolute px-8 py-10 min-w-[340px] max-w-[540px] w-full bg-white rounded-xl">
            <button
                onClick={() => dispatch(closeModal("detailsEvent"))}
                className="absolute top-[-40px] right-[-40px] w-[35px] h-[35px] bg-white rounded-[100%] cursor-pointer"
            >
                ✕
            </button>
            <div className="flex flex-col gap-2 mb-5">
                <span className="text-sm font-light text-gray-500">
                    Заказчик:
                </span>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-400 rounded-[100%]">
                        <picture>
                            <img src="" alt="" />
                        </picture>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-lg text-[#333]">
                            {clientName.at(0)?.toUpperCase() + clientName.slice(1).toLowerCase()}
                        </p>
                        <p className="text-lg text-[#333]">
                            {clientSurname.at(0)?.toUpperCase() + clientSurname.slice(1).toLowerCase()}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <span className="text-sm font-light text-gray-500">
                    Исполнитель:
                </span>
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-400 rounded-[100%]">
                        <picture>
                            <img src="" alt="" />
                        </picture>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-lg text-[#333]">
                            {userName.at(0)?.toUpperCase() + userName.slice(1).toLowerCase()}
                        </p>
                        <p className="text-lg text-[#333]">
                            {userSurname.at(0)?.toUpperCase() + userSurname.slice(1).toLowerCase()}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mb-4">
                <span className="text-sm font-light text-gray-500">
                    Услуга:
                </span>
                <p className="text-lg text-[#333]">
                    {nameService}
                </p>
            </div>
            <div className="flex flex-col mb-4">
                <span className="text-sm font-light text-gray-500">
                    Цена:
                </span>
                <p className="text-lg text-[#333]">
                    {priceService + ' руб.'}
                </p>
            </div>
            <div className="flex flex-col mb-4">
                <span className="text-sm font-light text-gray-500">
                    Дата начала оказания услуги:
                </span>
                <p className="text-lg text-[#333]">
                    {localStartDate}
                </p>
            </div>
            <div className="flex flex-col mb-4">
                <span className="text-sm font-light text-gray-500">
                    Дата окончания оказания услуги:
                </span>
                <p className="text-lg text-[#333]">
                    {localEndDate}
                </p>
            </div>
            <div className="flex flex-col mb-4">
                <span className="text-sm font-light text-gray-500">
                    Статус услуги:
                </span>
                <p className="text-lg text-[#333]">
                    {statusName}
                </p>
            </div>
            <div className="flex flex-col mb-4">
                <span className="text-sm font-light text-gray-500">
                    Дополнительная информация:
                </span>
                <p className="text-lg text-[#333]">
                    {info}
                </p>
            </div>
        </div>
    )
}