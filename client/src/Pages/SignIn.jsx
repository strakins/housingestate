// import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignIn = () => {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  
  
  const handleSubmit = async (e) => {
    try {
      setLoading(true)
      e.preventDefault();
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false)
      setError(null)
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
    setLoading(false)
    // console.log(data)
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* <h3 className="text-2xl font-semibold text-center my-8 text-white">Hey, Welcome Back...... </h3> */}
      <h3 className="text-2xl font-semibold text-center my-8 text-white">Please Sign In </h3>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-5">
        <input type="email" onChange={handleChange} placeholder="Email" className="border-2 border-gray-400 outline-none p-3 rounded-lg" id="email"/>
        <input type="password" onChange={handleChange} placeholder="Password" className="border-2 border-gray-400 outline-none p-3 rounded-lg" id="password"/>
        <button disabled={loading} className="bg-green-600 py-3 uppercase text-lg rounded-lg text-white hover:opacity-90 disabled:opacity-40">
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>

      <div className='flex my-5 text-white'>
        <p>Dont Have an Account? </p>
        <Link to='/signup' className='text-blue-600 ml-2'>Sign Up</Link>
      </div>
      {error && <em className='text-red-400 text-base'>{error}</em>}
    </div>
  )
}

export default SignIn