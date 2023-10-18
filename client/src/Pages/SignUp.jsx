// import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h3 className="text-2xl font-semibold text-center my-8 text-white">Create An Account</h3>
      <form action="" className="flex flex-col gap-5">
        <input type="text" placeholder="Username" className="border-2 border-gray-400 outline-none p-3 rounded-lg" id="username"/>
        <input type="email" placeholder="Email" className="border-2 border-gray-400 outline-none p-3 rounded-lg" id="email"/>
        <input type="password" placeholder="Password" className="border-2 border-gray-400 outline-none p-3 rounded-lg" id="password"/>
        <button className="bg-green-600 py-3 uppercase text-xl rounded-lg text-white hover:opacity-90 disabled:opacity-40">Sign up</button>
      </form>

      <div className='flex mt-5 text-white'>
        <p>Already Have an Account? </p>
        <Link to='/login' className='text-blue-600 ml-2'>Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp