import type { FC } from "react"

interface PageTitleProps {
    title: string,
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return (
        <>
            <h1 className="text-gray-500 font-medium text-2xl mb-6">
                {title}
            </h1>
        </>
    )
}