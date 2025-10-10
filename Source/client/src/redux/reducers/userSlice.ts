import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../shared/types/user.types";

// Создание интерфейса для начального состояния userSlice
export interface UserState {
    user: User | null,
    loading: boolean,
    error: string | null,
}

// Создание начального состояния userSlice
const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
}

// Создание slice для установки и очистки userSlice из стора
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
            state.error = null
            state.loading = false
        },
        clearUser(state) {
            state.user = null
            state.error = null
            state.loading = false
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
export const { setUser, clearUser, setLoading, setError } = userSlice.actions
// Экспорт редьюсера
export default userSlice.reducer