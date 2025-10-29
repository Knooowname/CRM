import { type FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { openModal } from "../../redux/reducers/modalSlice";

interface DashboardClientsCardProps {
  id: string,
  nameClient: string;
  surnameClient: string;
  eventEndDate: string;
  eventStartDate: string;
  status: string;
  serviceName: string,
  setCurrentEventId: (id: string) => void
}

export const DashboardEventsCard: FC<DashboardClientsCardProps> = ({
  nameClient,
  surnameClient,
  status,
  eventEndDate,
  eventStartDate,
  serviceName,
  setCurrentEventId,
  id
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

  // useEffect(() => {
  //   console.log(status)
  // }, [status])

  return (
    <>
      <td className="flex gap-2 items-center w-[20%]">
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
        <p className="text-[#333]">{serviceName}</p>
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
            status === "Подтвержден"
              ? "text-[#6fbe64]"
              : status === "Требуется подтверждение"
              ? "text-[#e4dd73]"
              : status === "Новый"
              ? "text-[#62b3de]"
              : "text-[#d04547]"
          }`}
        >
          {status}
        </p>
      </td>
      <button
        onClick={() => {
          setCurrentEventId(id)
          dispatch(openModal("detailsEvent"));
        }}
        className="text-[#6286ee] cursor-pointer min-w-[80px]"
      >
        Details →
      </button>
    </>
  );
};
