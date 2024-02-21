import { Button, TextField } from '@mui/material'
import React from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom'

let user = {
  login: '1nomooov',
  password: 'muhammad'
}
function Signin() {
  const navigate = useNavigate()
  
function fnSetData(e){
  
  e.preventDefault()
  let login = e.target.login.value
  let password = e.target.password.value
  if (user.login == login && user.password == password){
   window.localStorage.setItem('token', 'muhammadqodir')
    navigate('/')
  }else{
    window.localStorage.setItem('token', 'User not found')
  }
}
  return (
   <form onSubmit={(e)=> fnSetData(e)} action="#" className='form'>
    <div className="form__inner">
    <TextField id="outlined-basic" name='login' label="Login" variant="outlined" />
    </div>
   <div className="form__inner">
   <TextField id="outlined-basic" name='password' label="Password" variant="outlined" />
   </div>
    <Button type='submit' variant="contained">Sign in</Button>
    <div className="form__inner">
        <Link to={'/login/signup'}>Sign up</Link>
   </div>
   </form>
  )
}

export default Signin