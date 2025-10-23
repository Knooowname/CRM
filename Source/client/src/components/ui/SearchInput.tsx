import { useState, type FC } from "react"

interface SearchInputProps {
    setSearchString: (value: string) => void
}

export const SearchInput: FC<SearchInputProps> = ({ setSearchString }) => {
    
    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <input value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value)
            setSearchString(searchValue)
        }} type="search" placeholder="Search..." className="w-full max-w-70 min-w-40 h-10 border-1 border-gray-300 rounded-md cursor-pointer pl-2 outline-transparent focus:outline-[#6286ee] transition-all duration-300"/>
    )
}