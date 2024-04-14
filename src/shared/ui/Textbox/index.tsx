import { HTMLProps } from "react";

interface ITextBox extends HTMLProps<HTMLInputElement> {

}

export const Textbox = ({
  placeholder,
  value,
  type = "text",
  label,
  onChange
}: ITextBox) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}
