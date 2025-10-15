import { FormBtn } from "./ui/FormBtn"
import { FormInput } from "./ui/FormInput"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../api/api"
import { APICOMMAND } from "../shared/types/command.types"
import config from '../../../server/source/config/config.json'
import { useState } from "react"
import { useNavigate } from "react-router"
import { useMutation } from "@tanstack/react-query"
import { registerFormSchema, type RegisterFormType } from "../validations/registerFormSchema"
import { ClipLoader } from "react-spinners";

export const RegisterForm = () => {

    const [errorMess, setErrorMess] = useState<string | null>(null)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            job_title_id: 0,
            user_role_id: 2,
        }
    })

    const { isPending, isError, error, mutate } = useMutation({
        mutationKey: ['register', 'users'],
        mutationFn: async (userData: RegisterFormType) => {
            const response = await api(APICOMMAND.registNewUser, userData, config)
        
            const responseData = await response.json()

            if(responseData.error) {
                throw new Error(`${responseData.error}`)
            }

            return responseData
        },
        onSuccess: () => {
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
        <>
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute left-100 bottom-0 w-60 h-60 rounded-[100%] bg-[#6286ee] blur-lg"></div>
                <div className="absolute bottom-30 right-0 w-150 h-150 rounded-[100%] bg-[#6286ee] blur-lg"></div>
                <div className="absolute left-10 -top-10 w-160 h-160 rounded-[100%] bg-[#6286ee] blur-lg"></div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 w-auto min-w-120 h-auto px-10 py-20 border-1 border-gray-300 rounded-2xl backdrop-blur-xl" >
                    <h1 className="text-[#333333] font-medium text-2xl">
                        Регистрация
                    </h1>
                    <div className="w-full flex flex-col gap-3">
                        <FormInput type="text" label="Имя" placeholder="Введите имя:" {...register('first_name')} errorMessage={errors.first_name?.message} />
                        <FormInput type="text" label="Фамилия" placeholder="Введите фамилию:" {...register('last_name')} errorMessage={errors.last_name?.message} />
                        <FormInput type="tel" label="Телефон" placeholder="Введите телефон:" {...register('phone')} errorMessage={errors.phone?.message} />
                        <FormInput type="email" label="E-mail" placeholder="Введите E-mail:" {...register('email')} errorMessage={errors.email?.message} />
                        <FormInput type="password" label="Пароль" placeholder="Введите пароль:" {...register('password')} errorMessage={errors.password?.message} />
                        <FormInput type="hidden" {...register('user_role_id')} />
                        <FormInput type="hidden" {...register('job_title_id')} />
                        {errorMess && <span className="text-red-500 font-regular text-sm">{errorMess}</span>}
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <FormBtn type="submit" disabled={isPending}>
                            {isPending ? 
                                <ClipLoader size={20} color="ffffff"/>
                            : 'Регистрация'}
                        </FormBtn>
                        <a href="/auth" className="text-[#333]">Авторизация</a>
                    </div>
                </form>
            </div>
        </>
    )
}