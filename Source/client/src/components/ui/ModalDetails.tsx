import type { FC } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/reducers/modalSlice";

interface ModalDetailsProps {
  img: string;
  clientName: string;
  clientSurname: string;
  dateAndTime: string;
  serviceName: string;
  servicePrice: string;
}

export const ModalDetails: FC<ModalDetailsProps> = ({
  img,
  clientName,
  clientSurname,
  dateAndTime,
  serviceName,
  servicePrice,
}) => {
  const dispatch = useAppDispatch();

  const localDate = new Date(dateAndTime).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="relative min-w-100 bg-white p-8 rounded-xl ">
      <button
        onClick={() => dispatch(closeModal("details"))}
        className="absolute top-[-40px] right-[-40px] w-[35px] h-[35px] bg-white rounded-[100%] cursor-pointer"
      >
        ✕
      </button>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-20 h-20 bg-gray-300">
          <picture>
            <img src={`${img ? img : ""}`} />
          </picture>
        </div>
        <div>
          <span className="text-sm font-light text-gray-400">Имя фамилия</span>
          <p className="">
            {`${
              clientName.at(0)?.toUpperCase() +
              clientName.slice(1).toLowerCase()
            }` +
              " " +
              `${
                clientSurname.at(0)?.toUpperCase() +
                clientSurname.slice(1).toLowerCase()
              }`}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-sm font-light text-gray-400">Дата записи:</span>
        <p>{localDate}</p>
      </div>
      <div>
        <div className="mb-4">
          <span className="text-sm font-light text-gray-400">
            Название услуги:
          </span>
          <p>
            {`${
              serviceName.at(0)?.toUpperCase() +
              serviceName.slice(1).toLowerCase()
            }`}
          </p>
        </div>
        <div>
          <span className="text-sm font-light text-gray-400">Цена:</span>
          <p>{servicePrice}</p>
        </div>
      </div>
    </div>
  );
};
