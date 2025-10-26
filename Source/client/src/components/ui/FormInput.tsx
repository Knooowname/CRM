import React from "react";

interface FormInputProps {
    type: string;
    placeholder?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    errorMessage?: string;
    width?: string,
    height?: string,
    isDisabled?: boolean,
    placeholderColor?: string,
    textColor?: string,
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
    
    const {isDisabled, label, errorMessage, width, height, placeholderColor, textColor, ...otherProps} = props
    
    return (
        <label className="flex flex-col gap-1 w-full">
            <span className="text-gray-500 font-regular text-md">{label}</span>
            <input className={`w-full max-w-full min-w-40 h-13 border-1 border-gray-300 rounded-md cursor-pointer pl-2 outline-transparent focus:outline-[#6286ee] focus:border-transparent hover:border-[#6286ee] transition-all duration-300 ${placeholderColor ? `placeholder-${placeholderColor}` : ''}`} style={{width: `${width}px`, height: `${height}`, color: `${textColor}`}} disabled={isDisabled} {...otherProps} ref={ref} />
            {errorMessage && <span className="text-red-500 font-regular text-sm">{errorMessage}</span>}
        </label>
    )
})