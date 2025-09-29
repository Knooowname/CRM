import type { FC } from "react"

interface OptionProps {
    value: string,
}

export const Option: FC<OptionProps> = ({ value }) => {
    return (
        <option value={value}>
            {`Status: ${value}`}
        </option>
    )
}