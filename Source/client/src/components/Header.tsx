import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { HeaderNav } from "./HeaderNav"
import { Link, useNavigate } from "react-router"
import { clearUser } from "../redux/reducers/userSlice"

export const Header = () => {
    
    const user = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function logoutUser () {
        dispatch(clearUser())
        navigate('/auth')
    }

    return (
        <div className="relative h-full w-60 bg-[#6286ee] rounded-xl flex flex-col px-4 py-4  overflow-hidden shrink-0">
            <div className="flex items-center justify-between w-full h-10 mb-[40px]">
                <h3 className="m-0 text-white font-semibold">
                    React App
                </h3>
                <button className="h-10 w-10 bg-[url(/src/assets/menu.svg)] bg-no-repeat bg-center bg-auto cursor-pointer">
                </button>
            </div>
            <HeaderNav />
            <div className="absolute bottom-0 left-0 flex items-center justify-start p-4 h-16 w-full bg-[#5a7cde]">
                {user !== null && user !== undefined ? <button onClick={logoutUser} className="bg-[url(/src/assets/logout.svg)] bg-no-repeat bg-left bg-auto pl-8 text-white font-regular cursor-pointer">
                    Выход
                </button>
                :
                <Link to={'/auth'} className="bg-[url(/src/assets/login.svg)] bg-no-repeat bg-left bg-auto pl-8 text-white font-regular cursor-pointer">
                    Войти
                </Link>
                }
            </div>
        </div>
    )
}