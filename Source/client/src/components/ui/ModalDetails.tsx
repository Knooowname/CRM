import type { FC } from "react"

interface ModalDetailsProps {
    img: string,
    clientName: string,
    clientSurname: string,
    dateAndTime: string,
    serviceName: string,
    servicePrice: string,
}

export const ModalDetails: FC<ModalDetailsProps> = ({ img, clientName, clientSurname, dateAndTime, serviceName, servicePrice }) => {
    return (
        <div>
            <div>
                <div>
                    <picture>
                        <img src={`${img ? img : ''}`} />
                    </picture>
                </div>
                <div>
                    <p>
                        {clientName + ' ' + clientSurname}
                    </p>
                </div>
            </div>
            <div>
                <span>
                    Дата записи:
                </span>
                <p>
                    {dateAndTime}
                </p>
            </div>
            <div>
                <div>
                    <span>
                        Название услуги:
                    </span>
                    <p>
                        {serviceName}
                    </p>
                </div>
                <div>
                    <span>
                        Цена:
                    </span>
                    <p>
                        {servicePrice}
                    </p>
                </div>
            </div>
        </div>
    )
}