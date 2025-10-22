import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Status } from "../../shared/types/status.types"

export type StatusState = {
    status: Status[] | null,
    error: string | null,
    loading: boolean
}

const initialState: StatusState = {
    status: null,
    error: null,
    loading: false,
}

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<Status[]>) {
            state.status = action.payload
            state.error = null
            state.loading = false
        },
        clearStatus(state) {
            state.status = null
        }
    }
})

export const { setStatus, clearStatus } = statusSlice.actions
export default statusSlice.reducer