import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Services } from "../../shared/types/services.types";

export interface ServicesState {
    services: Services[] | null,
    error: string | null,
    loading: boolean
}

export const initialState: ServicesState = {
    services: null,
    error: null,
    loading: false,
}

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServices(state, action: PayloadAction<Services[]>) {
            state.services = action.payload
            state.error = null
            state.loading = false
        },
        clearServices(state) {
            state.services = null
            state.error = null
            state.loading = false
        },
    }
})

export const { setServices, clearServices } = servicesSlice.actions
export default servicesSlice.reducer