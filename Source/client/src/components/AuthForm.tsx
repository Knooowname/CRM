import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useAppDispatch } from "../redux/hooks"
import { useForm } from "react-hook-form"
import { authFormSchema, type AuthFormType } from "../validations/authFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'
import { setUser } from "../redux/reducers/userSlice"
import { FormInput } from "./ui/FormInput"
import { FormBtn } from "./ui/FormBtn"

export const AuthForm = () => {

    const [errorMess, setErrorMess] = useState<string | null>(null)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AuthFormType>({
        resolver: zodResolver(authFormSchema)
    })

    const { isPending, mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: async (data: AuthFormType) => {
            const response = await api(APICOMMAND.auth, data, config)

            const responseData = await response.json()

            if (responseData.error) {
                throw new Error(`${responseData.error}`)
            }

            return responseData
        },
        onSuccess(data) {
            console.log(data)
            dispatch(setUser(data))
            reset()
            // navigate('/')
        },
        onError(error) {
            setErrorMess(`${error}`)
        }
    })

    const onSubmit = async (data: AuthFormType) => {
        mutate(data)
    }

    return (
        <>
            <div className="flex items-center justify-center bg-[#2b2638] w-full h-[100vh]">
                <div className="grid grid-cols-2 px-40 py-15 w-full h-full gap-4">
                    <div className="flex flex-col justify-center p-20">
                        <h1 className="text-[40px] font-semibold text-[#FEFDFB] mb-6">
                            Создайте аккаунт
                        </h1>
                        <div className="flex items center gap-4 mb-6">
                            <p className="text-xl font-light text-[#FEFDFB]">
                                Нет аккаунта?
                            </p>
                            <Link to={'/register'} className="text-xl font-regular text-blue-400 underline">
                                Зарегистрироваться
                            </Link>
                        </div>
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                            <FormInput type="email" label="E-mail" placeholder="Введите E-mail:" placeholderColor="white" textColor="white" {...register('email')} errorMessage={errors.email?.message} />
                            <FormInput type="password" label="Пароль" placeholder="Введите пароль:" placeholderColor="white" textColor="white" {...register('password')} errorMessage={errors.password?.message} />
                            {errorMess && <span>{errorMess}</span>}
                            <FormBtn type={'submit'} height="50px" disabled={isPending}>
                                Отправить
                            </FormBtn>
                        </form>
                    </div>
                    <div className="relative bg-red-300 bg-[url(/src/assets/regist_bg.jpeg)] bg-center bg-no-repeat bg-cover rounded-3xl">
                        <Link to={'/'} className="group hover:shadow-xl transition-all duration-300 ease-in-out absolute flex items-center justify-center min-w-[150px] min-h-[36px] py-2 px-4 bg-transparent rounded-3xl right-4 top-4 text-sm font-regular text-[#333] overflow-hidden cursor-pointer">
                            <div className="absolute top-0 left-0 opacity-[0.2] bg-white w-[300px] h-[300px] group-hover:opacity-[0.5] transition-all duration-300 ease-in-out z-[0]">

                            </div>
                            <p className="absolute opacity-[0.6] group-hover:opacity-[1] transition-all duration-300 ease-in-out z-[5] text-black">
                                Вернуться на сайт
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}