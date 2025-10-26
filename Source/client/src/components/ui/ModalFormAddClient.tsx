import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  registerFormSchema,
  type RegisterFormType,
} from "../../validations/registerFormSchema";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from "../../../../server/source/config/config.json";
import { useState } from "react";
import { FormInput } from "./FormInput";
import { FormBtn } from "./FormBtn";
import { useAppDispatch } from "../../redux/hooks";
import { closeModal } from "../../redux/reducers/modalSlice";
import { queryClient } from "../../shared/constants/queryClient";

export const ModalFormAddClient = () => {
  const [errorMess, setErrorMess] = useState<string | null>(null);

    const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      job_title_id: 2,
      user_role_id: 0,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["register", "users"],
    mutationFn: async (data: RegisterFormType) => {
      const response = await api(APICOMMAND.registNewUser, data, config);

      const responseData = await response.json();

      if (responseData.error) {
        throw new Error(`${responseData.error}`);
      }

      return responseData.data;
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      reset();
      dispatch(closeModal('addClient'))
    },
    onError(error) {
        console.log(error)
      setErrorMess(`${error}`);
    },
  });

  const onSumbitAddClientModal = (data: RegisterFormType) => {
    mutate(data);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <form
        className="relative flex flex-col items-center gap-4 min-w-[360px] w-[460px] min-h-[400px] py-8 px-6 bg-white rounded-xl"
        onSubmit={handleSubmit(onSumbitAddClientModal)}
      >
        <button onClick={() => dispatch(closeModal('addClient'))} className="absolute top-[-50px] right-[-50px] w-[35px] h-[35px] bg-white rounded-[100%] cursor-pointer">
          ✕
        </button>
        <h3 className="text-black text-lg ">Регистрация нового пользователя</h3>
        <FormInput
          type="text"
          placeholder="Введите имя:"
          placeholderColor="black"
          label="Имя"
          {...register("first_name")}
          errorMessage={errors.first_name?.message}
        />
        <FormInput
          type="text"
          placeholder="Введите Фамилию:"
          placeholderColor="black"
          label="Фамилия"
          {...register("last_name")}
          errorMessage={errors.last_name?.message}
        />
        <FormInput
          type="tel"
          placeholder="Введите телефон:"
          placeholderColor="black"
          label="Телефон"
          {...register("phone")}
          errorMessage={errors.phone?.message}
        />
        <FormInput
          type="email"
          placeholder="Введите E-mail:"
          placeholderColor="black"
          label="E-mail"
          {...register("email")}
          errorMessage={errors.email?.message}
        />
        <FormInput
          type="password"
          placeholder="Введите пароль:"
          placeholderColor="black"
          label="Пароль"
          {...register("password")}
          errorMessage={errors.password?.message}
        />
        <div>
          <FormInput type="hidden" {...register("job_title_id")} />
          <FormInput type="hidden" {...register("user_role_id")} />
        </div>
        {errorMess && <span className="text-md font-light text-red-300">{errorMess}</span>}
        <FormBtn type="submit" disabled={isPending}>
          Отправить
        </FormBtn>
      </form>
    </div>
  );
};
