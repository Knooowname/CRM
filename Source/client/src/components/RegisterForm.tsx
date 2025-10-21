import { Link, useNavigate } from "react-router"
import { FormInput } from "./ui/FormInput"
import { FormBtn } from "./ui/FormBtn"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema, type RegisterFormType } from "../validations/registerFormSchema"
import { useMutation } from "@tanstack/react-query"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'

export const RegisterForm = () => {

    const [errorMess, setErrorMess] = useState<string | null>(null)
    const navigate = useNavigate()

    const {register, handleSubmit, reset, formState: {errors}} = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            user_role_id: 0,
            job_title_id: 2
        }
    })

    const { isPending, mutate } = useMutation({
        mutationKey: ['register', 'users'],
        mutationFn: async (userData: RegisterFormType) => {
            const response = await api(APICOMMAND.registNewUser, userData, config)
        
            const responseData = await response.json()

            if(responseData.error) {
                throw new Error(`${responseData.error}`)
            }

            return responseData
        },
        onSuccess: (data) => {
            reset()
            navigate('/auth')
        },
        onError: (error) => {
            setErrorMess(`${error}`)
        }
    })

    const onSubmit = async (formData: RegisterFormType) => {
        mutate(formData)
    }

    return (
        <div className="flex items-center justify-center bg-[#2b2638] w-full h-[100vh]">
            <div className="grid grid-cols-2 px-40 py-10 w-full gap-4">
                <div className="relative bg-red-300 bg-[url(/src/assets/regist_bg.jpeg)] bg-center bg-no-repeat bg-cover rounded-3xl">
                    <Link to={'/'} className="group hover:shadow-xl transition-all duration-300 ease-in-out absolute flex items-center justify-center min-w-[150px] min-h-[36px] py-2 px-4 bg-transparent rounded-3xl right-4 top-4 text-sm font-regular text-[#333] overflow-hidden cursor-pointer">
                        <div className="absolute top-0 left-0 opacity-[0.2] bg-white w-[300px] h-[300px] group-hover:opacity-[0.5] transition-all duration-300 ease-in-out z-[2]">
                        </div>
                        <p className="absolute opacity-[0.6] group-hover:opacity-[1] transition-all duration-300 ease-in-out z-[5] text-black">
                            Вернуться на сайт
                        </p>
                    </Link>
                </div>
                <div className="p-20">
                    <h1 className="text-[40px] font-semibold text-[#FEFDFB] mb-6">
                        Создайте аккаунт
                    </h1>
                    <div className="flex items center gap-4 mb-6">
                        <p className="text-xl font-light text-[#FEFDFB]">
                            Уже есть аккаунт?
                        </p>
                        <Link to={'/auth'} className="text-xl font-regular text-blue-400 underline">
                            Войти
                        </Link>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex items-center gap-4">
                            <FormInput type="text" label="Имя" placeholder="Введите имя:" placeholderColor="white" textColor="white" {...register('first_name')} errorMessage={errors.first_name?.message}/>
                            <FormInput type="text" label="Фамилия" placeholder="Введите фамилию:" placeholderColor="white" textColor="white" {...register('last_name')} errorMessage={errors.last_name?.message}/>
                        </div>
                        <FormInput type="tel" label="Телефон" placeholder="Введите телефон:" placeholderColor="white" textColor="white" {...register('phone')} errorMessage={errors.phone?.message}/>
                        <FormInput type="email" label="E-mail" placeholder="Введите E-mail:" placeholderColor="white" textColor="white" {...register('email')} errorMessage={errors.email?.message}/>
                        <FormInput type="password" label="Пароль" placeholder="Введите пароль:" placeholderColor="white" textColor="white" {...register('password')} errorMessage={errors.password?.message}/>
                        <FormInput type="hidden" {...register('job_title_id')}/>
                        <FormInput type="hidden" {...register('user_role_id')}/>
                        {errorMess && <span>{errorMess}</span>}
                        <FormBtn type={'submit'} height="50px" disabled={isPending}>
                            Отправить
                        </FormBtn>
                    </form>
                </div>
            </div>
        </div>
    )
}