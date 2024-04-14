
export const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <label htmlFor="username">User Name</label>
        <input placeholder="name" id="username"/>
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input placeholder="email" id="Email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input placeholder="password" id="password" type="password" />
      </div>

      <div>
        <button disabled>Submit</button>
      </div>
    </div>
  )
}
