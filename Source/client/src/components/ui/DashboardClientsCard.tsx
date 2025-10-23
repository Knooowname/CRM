import type { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { openModal } from "../../redux/reducers/modalSlice";

interface DashboardClientsCardProps {
  id: string;
  img: string;
  name: string;
  surname: string;
  recordingTime: string;
  status: "Approved" | "Need approve" | "New" | "Refused";
  setCurrentUserId?: (id: string) => void | null;
}

export const DashboardClientsCard: FC<DashboardClientsCardProps> = ({
  id,
  img,
  name,
  surname,
  status,
  recordingTime,
  setCurrentUserId,
}) => {
  const dispatch = useAppDispatch();

  const localDate = new Date(recordingTime).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <td className="flex gap-2 items-center w-[20%]">
        <div
          className={`bg-[url(${img})] bg-no-repeat bg-center bg-auto w-10 h-10 rounded-4xl bg-gray-300`}
        ></div>
        <div>
          <span className="text-gray-400 font-light text-sm">Имя Фамилия</span>
          <p className="text-[#333]">
            {`${name.at(0)?.toUpperCase() + name.slice(1).toLowerCase()}` +
              " " +
              `${
                surname.at(0)?.toUpperCase() + surname.slice(1).toLowerCase()
              }`}
          </p>
        </div>
      </td>
      <td className="flex flex-col gap-0.5 w-[20%]">
        <span className="text-gray-400 font-light text-sm">Услуга</span>
        <p className="text-[#333]">Service Name...</p>
      </td>
      <td className="flex flex-col gap-0.5 w-[20%]">
        <span className="text-gray-400 font-light text-sm">Дата и время</span>
        <p className="text-[#333]">{localDate}</p>
      </td>
      <td className="flex flex-col gap-0.5 w-[20%]">
        <span className="text-gray-400 font-light text-sm">Статус</span>
        <p
          className={`${
            status === "Approved"
              ? "text-[#6fbe64]"
              : status === "Need approve"
              ? "text-[#e4dd73]"
              : status === "New"
              ? "text-[#62b3de]"
              : "text-[#d04547]"
          }`}
        >
          {status}
        </p>
      </td>
      <button
        onClick={setCurrentUserId ? () => {
          setCurrentUserId(id);
          dispatch(openModal("details"));
        } : undefined}
        className="text-[#6286ee] cursor-pointer"
      >
        Details →
      </button>
    </>
  );
};
