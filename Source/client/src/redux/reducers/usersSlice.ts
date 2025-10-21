import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../shared/types/user.types";

// Интерфейс для начального состояния usersSlice
export interface UserSlice {
    users: User[] | null,
    loading: boolean,
    error: string | null,
}

// Начальное состояние usersSlice
const initialState: UserSlice = {
    users: null,
    loading: false,
    error: null
}

// Создание slice для установки и очистки usersSlice из стора
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload
            state.loading = false
            state.error = null
        },
        clearUsers(state) {
            state.users = null
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        }
    }
})

// Экспорт действий
export const { setUsers, clearUsers, setError, setLoading } = usersSlice.actions
// Экспорт редьюсера
export default usersSlice.reducer