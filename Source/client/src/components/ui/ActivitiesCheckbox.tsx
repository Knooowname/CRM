import type { FC } from "react"

interface ActivitiesCheckboxProps {
    checkboxText: string,
    nameCheck: string,
}

export const ActivitiesCheckbox: FC<ActivitiesCheckboxProps> = ({ checkboxText, nameCheck }) => {
    return (
        <div className="flex gap-2 items-center">
            <input type="checkbox" name={nameCheck} id={nameCheck} />
            <label htmlFor={nameCheck} className="text-gray-500 text-md">{checkboxText}</label>
        </div>
    )
}