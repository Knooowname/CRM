import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import usersReducer from './reducers/usersSlice'
import modalReducer from './reducers/modalSlice'
import statusReducer from './reducers/statusSlice'
import eventsReducer from './reducers/eventSlice'
import servicesReducer from './reducers/servicesSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        modal: modalReducer,
        status: statusReducer,
        events: eventsReducer,
        services: servicesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch