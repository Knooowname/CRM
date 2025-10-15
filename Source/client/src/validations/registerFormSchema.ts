import z from "zod"

export const registerFormSchema = z.object({
    last_name: z.string().min(1, 'Поле не может быть пустым'),
    first_name: z.string().min(1, 'Поле не может быть пустым'),
    phone: z.string().max(20, 'Превышенно возможное количество символов'),
    email: z.email('Неверный адрес электронной почты').min(1, 'Поле не может быть пустым'),
    password: z.string().min(1, 'Поле не может быть пустым'),
    user_role_id: z.number(),
    job_title_id: z.number(),
})

export type RegisterFormType = z.infer<typeof registerFormSchema>