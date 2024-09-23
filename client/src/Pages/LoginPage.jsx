import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='-mt-64'>
      <h1 className='text-4xl text-center mb-4'>Login</h1>
      <form className='max-w-md mx-auto '>
        <input type='email' placeholder='your@email.com' value={email}
        onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='password' value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }} />
        <button className='primary'>Login</button>
        <div className='text-center py-2 mt-1 text-gray-500'>
          Don't have an account? <Link className='underline text-black' to={'/register'}>Register now</Link>
        </div>
      </form>
      </div>
     
    </div>
  )
}

export default LoginPage