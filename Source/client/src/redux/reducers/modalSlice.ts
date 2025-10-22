import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Modal } from "../../shared/types/modal.types"

export type ModalState = {
    type: Modal,
    isOpen: boolean
}

export const initialState: ModalState = {
    type: null,
    isOpen: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<Modal>) {
            state.isOpen = true
            state.type = action.payload
        },
        closeModal(state, action: PayloadAction<Modal>) {
            state.isOpen = false
            state.type = action.payload
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer