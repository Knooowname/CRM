import type { FC } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { openModal } from "../../redux/reducers/modalSlice"
import type { Modal } from "../../shared/types/modal.types"

interface CreateBtnProps {
    text: string,
    modalType: Modal,
}

export const CreateBtn: FC<CreateBtnProps> = ({ text, modalType }) => {
    
    const dispatch = useAppDispatch()

    return (
        <button onClick={() => dispatch(openModal(modalType))} className="h-10 px-4 bg-red-400 text-white rounded-md cursor-pointer outline-transparent focus:outline-[#e24b42] hover:bg-[#e24b42] hover:text-white transition-all duration-300">
            {text}
        </button>
    )
}