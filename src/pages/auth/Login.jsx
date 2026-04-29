import { EyeClosed } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
 


  return (
    <div className="">
      <div className="grid md:grid-cols-2 w-full h-screen p-3 md:p-8">
        <section className="bg-amber-50 rounded-3xl">

          <div>
            
          </div>
        </section>

        <section className="flex flex-col w-full  justify-center md:px-10 px-3">
          <div className='flex items-center gap-3 font-bold text-xl mb-8'>
            <img src='/assets/logo.png' alt='logo' className='w-10 mb-5' />
            <h1>KitchenWare Inventory</h1>
          </div>
          <h1 className="text-2xl font-semibold mb-2">Welcome 👋🏾</h1>
          <p className="text-gray-500 mb-5">Please login here</p>

          <div>
            <form className="w-full max-w-md gap-4 flex flex-col">
              <div className="border flex-col flex w-full px-4  py-1 rounded-xl border-blue-600">
                <label
                  htmlFor="email"
                  className="text-[11px] mb-1  text-blue-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full outline-none"
                  placeholder="Enter your email address to login"
                />
              </div>
              <div className="border border-blue-600 rounded-xl px-4 py-1">
                <label
                  htmlFor="password"
                  className="text-[11px] mb-1 text-blue-600"
                >
                  Password
                </label>
                <div className="flex justify-between items-center">
                  <input
                    type="password"
                    placeholder="Type Password Here"
                    className="w-full outline-none"
                  />
                  <EyeClosed />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input type="checkbox"  />
                  <p>Remember Me</p>
                </div>
                <Link to="/forgetpassword">Forget Password?</Link>
              </div>
              <button className="w-full bg-blue-800 px-6 py-3 rounded-xl text-white">
                Login
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login
