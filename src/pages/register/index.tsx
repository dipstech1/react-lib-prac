import { Textbox } from "@/shared/ui/Textbox"
import { Button } from "@/shared/ui/Button"
export const Register = () => {
  
  return (
    <div className="flex-center"> 
    <div className="w-1/2 h-[100%]">
      <h1>Register</h1>
      <Textbox label="User Name"  type="text" placeholder="User Name"/>
      <Textbox label="Email"  type="email" placeholder="Email"/>
      <Textbox label="Password"  type="password" placeholder="Password"/>
      <Textbox label="Conform Password"  type="password" placeholder="Conform Password"/>
      <div>
        <Button type="submit" label="Submit" btnType="primary"/>
      </div>
    </div>
    </div>
  )
}
