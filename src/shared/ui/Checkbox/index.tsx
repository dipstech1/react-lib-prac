import {HTMLProps} from "react";
interface ICheckboxProps extends HTMLProps<HTMLInputElement>{
   
}


export const Checkbox=({label,name,value,id,checked, }:ICheckboxProps)=>{
    return(
        <><label  htmlFor={label}>{label}</label>
        <input type="checkbox" name={name} value={value} id={id} checked={checked}/>
        </>
    )
}
