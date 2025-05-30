import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect } = useAuth0();

  return (
    
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-md bg-white">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center">Login to Your Account</h2>
        </div>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded-md border border-gray-300"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-2 mb-4 rounded-md border border-gray-300"
          />
          <input
            type="password"
            placeholder="Conform Password"
            className="w-full p-2 mb-4 rounded-md border border-gray-300"
          />
          <button className="w-full p-2 text-xl cursor-pointer bg-orange-500 hover:bg-orange-700 text-white rounded-md">
            Register
          </button>
        </div>

        <div className="text-center mb-6 text-gray-400">or</div>

        <button
        onClick={()=>{
          loginWithRedirect();
        }}
         className="w-full p-2 flex items-center cursor-pointer justify-center gap-2 border border-gray-300 rounded-md bg-white">
          <span className="text-xl">🌐</span>
          Login with Google
        </button>
      </div>
    </div>
    </div>
  )
}

export default Login