import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../shared/types/user.types";

interface initialStateUser {
    user: User | null,
    loading: boolean,
    error: string | null,
}

const initialState: initialStateUser = {
    user: null,
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
})