import type React from "react";
import type { FC } from "react";

interface FormBtnProps {
    type: "submit" | "reset" | "button" | undefined,
    children: React.ReactNode,
    disabled?: boolean,
    height?: string,
    width?: string,
}

export const FormBtn: FC<FormBtnProps> = ({ type, children, disabled, height, width }) => {
    return (
        <button className="px-8 py-2 bg-[#6286ee] hover:bg-[#6e8fee] rounded-xl text-white font-medium text-lg transition-all duration-300" style={{ width: `${width}`, height: `${height}` }} type={type} disabled={disabled}>
            {children}
        </button>
    )
}