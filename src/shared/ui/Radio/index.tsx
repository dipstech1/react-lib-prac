import { HTMLProps } from "react"

interface IRadioProps extends HTMLProps<HTMLInputElement>{
   
}

export const Radio = ({name,id, value, checked, label} : IRadioProps) => {
  return (
    <div className="flex-center">
        <label htmlFor={label}>{label}</label>
        <input type='radio' name={name} value={value} id={id} checked={checked}/>
    </div>
  )
}
