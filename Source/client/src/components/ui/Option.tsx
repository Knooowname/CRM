import type { FC } from "react"

interface OptionProps {
    value: string,
    text: string,
}

export const Option: FC<OptionProps> = ({ value, text }) => {
    return (
        <option value={value}>
            {`${text}: ${value}`}
        </option>
    )
}