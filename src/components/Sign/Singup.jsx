import { Button, TextField } from '@mui/material'
import React from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom'



let user = {
    username: '',
    loginup: '',
    passwordup: ''
}

function Signup() {
    const navigate = useNavigate()
    function fnUpData(e){
        e.preventDefault()
        let username = e.target.username.value
        let loginup = e.target.loginup.value
        let passwordup = e.target.passwordup.value
        if (user.username == username && user.loginup == loginup && user.passwordup == passwordup){
             navigate('/')
           }else{
            navigate('/')
           }
    }
  return (
   <form  onSubmit={(e)=> fnUpData(e)} action="#" className='form'>
    <div className="form__inner">
    <TextField id="outlined-basic" name='username' label="Username" variant="outlined" />
    </div>
    <div className="form__inner">
    <TextField id="outlined-basic" name='loginup' label="Login" variant="outlined" />
    </div>
    <div className="form__inner">
   <TextField id="outlined-basic" name='passwordup' label="Password" variant="outlined" />
   </div>
   <div className="form__inner">
   <TextField id="outlined-basic" name='passwordup' label="Confirm password" variant="outlined" />
   </div>
   <div className="form__inner">
   </div>
    <Button type='submit' variant="contained">Sign up</Button>
    <div className="form__inner">
        <Link to={'/login/signin'}>Sign in</Link>
   </div>
   </form>
  )
}

export default Signup