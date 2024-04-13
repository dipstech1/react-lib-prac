
interface IButton {
    label:string;
    btnType?:btnType;
    type: 'button' | 'submit'
    onClick ? : () => void,
}

type btnType = 'primary' | 'secondary'

export const Button = ({label,btnType = 'primary',type,onClick}:IButton) => {
  const btnClass = btnType === 'primary' ? 'btn-primary' : 'btn-secondary'  
  return (
    <button type={type} onClick={onClick} className={`btn ${btnClass}`}>{label}</button>
  )
}
