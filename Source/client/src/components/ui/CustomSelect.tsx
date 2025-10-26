import type { FC } from "react"
import { Option } from "./Option"
import type { Status } from "../../shared/types/status.types"

interface StatusSelectProps {
    optionText: string,
    optionValues: Status[] | null,
}

export const CustomSelect: FC<StatusSelectProps> = ({ optionText, optionValues }) => {
    return (
        <select name="Opt 1" className="w-45 h-10 border-1 border-gray-300 rounded-md cursor-pointer outline-transparent focus:outline-[#6286ee] transition-all duration-300">
            {optionValues?.map(item => (
                <Option value={item.name_status} text={optionText}/>
            ))}
        </select>
    )
}