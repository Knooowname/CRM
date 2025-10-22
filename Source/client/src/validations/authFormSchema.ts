import z from "zod"

export const authFormSchema = z.object({
    email: z.email('Неверный адрес электронной почты').min(1, 'Поле не может быть пустым'),
    password: z.string().min(4, 'Пароль должен содержать более 4 символов'),
})

export type AuthFormType = z.infer<typeof authFormSchema>