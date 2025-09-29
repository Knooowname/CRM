import { Link } from "react-router"
import { appLinks } from "../shared/constants/appLinks"
import { HeaderLink } from "./ui/HeaderLink"


export const HeaderNav = () => {
    return (
        <ul className="flex flex-col gap-4 mb-auto">
            {appLinks.map((item, index) => (
                <li key={index}>
                    <Link to={item.href} style={{ backgroundImage: `url(${item.srcImg})` }} className={`bg-left bg-no-repeat bg-auto pl-8 text-whitecursor-pointer flex items-center justify-start gap-4 w-full h-10  bg-transparent hover:bg-[#6e8fee] text-white font-semibold rounded-md px-2`}>
                        {item.nameLink}
                    </Link>
                </li>
            ))}
        </ul>
    )
}