import { useState } from "react";
type AuthUser = {
  email: string,
  name:string
}
export const User = () =>{
  const [user,setUser] = useState<AuthUser >({} as AuthUser)
  const handleLogin = () =>{
    setUser({
      name:'Aly',
      email:'Aly@gmail.com'
    })
  }
  const handleLogout = () =>{
    setUser({} as AuthUser)
  }
  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name} </div>
      <div>User email is {user.email} </div>
    </div>
  )
}