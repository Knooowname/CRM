import type { FC } from "react"

interface LayoutPagesProps {
    children: React.ReactNode
}

export const LayoutPages: FC<LayoutPagesProps> = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-full px-6 py-4 pb-0">
            {children}
        </div>
    )
}