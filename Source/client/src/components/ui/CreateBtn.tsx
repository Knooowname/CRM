import type { FC } from "react"

interface CreateBtnProps {
    text: string,
}

export const CreateBtn: FC<CreateBtnProps> = ({ text }) => {
    return (
        <button className="h-10 px-4 bg-red-400 text-white rounded-md cursor-pointer outline-transparent focus:outline-[#e24b42] hover:bg-[#e24b42] hover:text-white transition-all duration-300">
            {text}
        </button>
    )
}