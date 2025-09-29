import type { FC, ReactNode } from "react"
import { useNavigate } from "react-router"

interface HeaderLinkProps {
    url: string,
    children: ReactNode,
    img: string,
}

export const HeaderLink: FC<HeaderLinkProps> = ({ img, url, children }) => {
    
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/${url}`)
    }

    return (
        <div onClick={handleNavigate} className="cursor-pointer flex items-center justify-start gap-4 w-full h-10 bg-transparent hover:bg-[#6e8fee] text-white font-semibold rounded-md px-2">
            <img src={`${img}`} alt={`Переход на страницу ${children}`} className="block h-6 w-6"/>
            <a className="flex items-center h-full">
                {children}
            </a>
        </div>
    )
}