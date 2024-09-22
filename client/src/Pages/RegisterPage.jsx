import React from 'react'
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='-mt-64'>
      <h1 className='text-4xl text-center mb-4'>Register</h1>
      <form className='max-w-md mx-auto '>
        <input type='text' placeholder='username'/>
        <input type='email' placeholder='your@email.com'/>
        <input type="password" placeholder='password' />
        <button className='primary'>Login</button>
        <div className='text-center py-2 mt-1 text-gray-500'>
        Already have an account? <Link className='underline text-black' to={'/login'}>Login now</Link>
        </div>
      </form>
      </div>
     
    </div>
  )
}

export default RegisterPage