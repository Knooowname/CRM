import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Event } from "../../shared/types/event.types";

export interface EventState {
    events: Event[] | null,
    error: string | null,
    loading: boolean
}

export const initialState: EventState = {
    events: null,
    error: null,
    loading: false
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEvents(state, action: PayloadAction<Event[]>) {
            state.error = null,
            state.events = action.payload
            state.loading = false
        },
        clearEvents(state) {
            state.events = null,
            state.error = null
            state.loading = false
        },
        setEventsLoading(state) {
            state.error = null
            state.events = null
            state.loading = true
        }
    }
})

export const { setEvents, clearEvents, setEventsLoading } = eventSlice.actions
export default eventSlice.reducer