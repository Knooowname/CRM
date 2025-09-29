import { appLinks } from "../shared/constants/appLinks"
import { HeaderLink } from "./ui/HeaderLink"


export const HeaderNav = () => {
    return (
        <ul className="flex flex-col gap-4 mb-auto">
            {appLinks.map(item => (
                <li>
                    <HeaderLink url={`/${item.href}`} img={item.srcImg}>
                        {item.nameLink}
                    </HeaderLink>
                </li>
            ))}
        </ul>
    )
}