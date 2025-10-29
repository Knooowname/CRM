import { useEffect, useState } from "react"

export function useCurrentValueModal<T extends { id: string }>(data: T[]) {
    const [currentId, setCurrentId] = useState<string | null>(null)
    const [currentValue, setCurrentValue] = useState<T | null>(null)

    useEffect(() => {
        if(!currentId) {
            setCurrentValue(null)
            return
        }

        const found = data.find(item => item.id === currentId)
        setCurrentValue(found ?? null)
    }, [currentId, data])

    return {
        currentId,
        setCurrentId,
        currentValue,
        setCurrentValue
    }
}