import {   useState } from "react"

export const Register = () => {

  const [formData, setFormData] = useState({userName:"", email:"", password:"", confirmPassword:""});
  const {confirmPassword,email,password,userName} = formData

  const onFormDataChange = (e:any) => {
    let {name,value} = e?.target
    setFormData({...formData , [name]:value});
  }

  let disabled = true;

  if((password.length > 0 && confirmPassword.length > 0) && password === confirmPassword){
    disabled = false
  }else{
    disabled = true
  }

  return (
    <div>
      <h1>Register</h1>
      <div>
        <label htmlFor="username">User Name</label>
        <input type="text" onChange={onFormDataChange} name="userName" placeholder="name" id="username" value={userName}/>
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input type="text" onChange={onFormDataChange} name="email" placeholder="email" id="Email" value={email}/>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input onChange={onFormDataChange} name="password" placeholder="password" id="password" type="password" value={password}/>
      </div>

      <div>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input onChange={onFormDataChange} name="confirmPassword" placeholder="confirmpassword" id="confirmpassword" type="password" value={confirmPassword} min={3}/>
      </div>
     
      <div>
        <button className="btn btn-primary" disabled={disabled}>Submit</button>
      </div>
    </div>
  )
}
