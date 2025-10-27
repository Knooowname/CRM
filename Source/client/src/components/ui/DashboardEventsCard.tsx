// export const DashboardEventsCard = () => {
//     return (
//         <>

//         </>
//     )
// }

import type { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { openModal } from "../../redux/reducers/modalSlice";

interface DashboardClientsCardProps {
  id: string;
  img: string;
  nameClient: string;
  surnameClient: string;
  eventEndDate: string;
  eventStartDate: string;
  status: string;
  serviceName: string,
}

export const DashboardEventsCard: FC<DashboardClientsCardProps> = ({
  id,
  img,
  nameClient,
  surnameClient,
  status,
  eventEndDate,
  eventStartDate,
  serviceName
}) => {
  const dispatch = useAppDispatch();

  const localStartDate = new Date(eventStartDate).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const localEndDate = new Date(eventEndDate).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <>
      <td className="flex gap-2 items-center w-[20%]">
        <div
          className={`bg-[url(${img})] bg-no-repeat bg-center bg-auto w-10 h-10 rounded-4xl bg-gray-300`}
        ></div>
        <div>
          <span className="text-gray-400 font-light text-sm">Имя Фамилия</span>
          <p className="text-[#333]">
            {`${nameClient.at(0)?.toUpperCase() + nameClient.slice(1).toLowerCase()}` +
              " " +
              `${
                surnameClient.at(0)?.toUpperCase() + surnameClient.slice(1).toLowerCase()
              }`}
          </p>
        </div>
      </td>
      <td className="flex flex-col gap-0.5 w-[20%]">
        <span className="text-gray-400 font-light text-sm">Услуга</span>
        <p className="text-[#333]">Service Name...</p>
      </td>
      <td className="flex flex-col gap-0.5 w-[20%]">
        <span className="text-gray-400 font-light text-sm">Дата и время начала</span>
        <p className="text-[#333]">{localStartDate}</p>
      </td>
      <td className="flex flex-col gap-0.5 w-[20%]">
        <span className="text-gray-400 font-light text-sm">Дата и время окончания</span>
        <p className="text-[#333]">{localEndDate}</p>
      </td>
      <td className="flex flex-col gap-0.5 w-[20%]">
        <span className="text-gray-400 font-light text-sm">Статус</span>
        <p
          className={`${
            status.id === "6"
              ? "text-[#6fbe64]"
              : status.id === "3"
              ? "text-[#e4dd73]"
              : status.id === "5"
              ? "text-[#62b3de]"
              : "text-[#d04547]"
          }`}
        >
          {status.name_status}
        </p>
      </td>
      <button
        onClick={() => {
          dispatch(openModal("details"));
        }}
        className="text-[#6286ee] cursor-pointer"
      >
        Details →
      </button>
    </>
  );
};
