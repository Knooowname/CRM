import * as z from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { APICOMMAND } from "../shared/types/command.types";
import config from '../../../server/source/config/config.json'
import { api } from "../api/api";
import { FormInput } from "./ui/FormInput";
import { FormBtn } from "./ui/FormBtn";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/reducers/userSlice";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export const authFormSchema = z.object({
    email: z.email().min(1, 'Поле не может быть пустым'),
    password: z.string().min(4, 'Пароль должен содержать более 4 символов'),
})

export type AuthFormType = z.infer<typeof authFormSchema>

export const AuthForm = () => {

    const [errorMess, setErrorMess] = useState<string | null>(null)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AuthFormType>({
        resolver: zodResolver(authFormSchema)
    })

    const {isPending, error, isError, mutate} = useMutation({
        mutationKey: ['auth'],
        mutationFn: async (data: AuthFormType) => {
            const response = await api(APICOMMAND.auth, data, config)

            const responseData = await response.json()

            if(responseData.error) {
                throw new Error(`${responseData.error}`)
            }

            return responseData
        },
        onSuccess(data) {
            dispatch(setUser(data))
            reset()
            navigate('/')
        },
        onError(error) {
            setErrorMess(`${error}`)
        }
    })

    const onSubmit = async (data: AuthFormType) => {
        mutate(data)
    }

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute bottom-15 w-60 h-60 rounded-[100%] bg-[#6286ee] blur-lg"></div>
            <div className="absolute bottom-30 right-2 w-200 h-200 rounded-[100%] bg-[#6286ee] blur-lg"></div>
            <div className="absolute left-10 -top-10 w-160 h-160 rounded-[100%] bg-[#6286ee] blur-lg"></div>
            <form className="flex flex-col items-center gap-6 w-auto min-w-120 h-auto px-10 py-20 border-1 border-gray-300 rounded-2xl backdrop-blur-xl" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-[#333333] font-medium text-2xl">
                    Авторизация
                </h1>
                <div className="w-full flex flex-col gap-3">
                    <FormInput type="email" label="E-mail" placeholder="Введите E-mail:" {...register('email')} errorMessage={errors.email?.message} />
                    <FormInput type="password" label="Пароль" placeholder="Введите пароль:" {...register('password')} errorMessage={errors.password?.message} />
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <FormBtn type="submit" disabled={isPending}>
                        Войти
                    </FormBtn>
                    <a href="/register" className="text-[#333]">Регистрация</a>
                </div>
            </form>
        </div>
    )
}