import type { FC } from "react"
import { ActivitiesCheckbox } from "./ActivitiesCheckbox"
import type { ActivitiesData } from "../../shared/types/activitiesData.types"

interface ActivitiesCardProps {
    title: string,
    data: ActivitiesData[],
}

export const ActivitiesCard: FC<ActivitiesCardProps> = ({ title, data }) => {
    return (
        <div className="flex flex-col w-full border-1 border-gray-300 rounded-xl overflow-hidden">
            <div className="w-full px-4 py-2 bg-[#6286ee] text-white font-medium text-lg">
                <span>
                    {title}
                </span>
            </div>
            <ul className="px-4 py-2">
                {data.map((item) => (
                    <li>
                        <ActivitiesCheckbox checkboxText={item.checkBoxText} nameCheck={item.nameCheck}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}