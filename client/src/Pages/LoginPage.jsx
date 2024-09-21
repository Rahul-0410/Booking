import React from 'react'

function LoginPage() {
  return (
    <div className='mt-4'>
      <h1 className='text-4xl text-center mb-2'>Login</h1>
      <form className='max-w-md mx-auto '>
        <input type='email' placeholder='your@email.com'/>
        <input type="password" placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage