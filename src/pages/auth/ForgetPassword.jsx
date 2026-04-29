
import React from "react";
import { ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";


const ForgetPassword = () => {
  return (
    <section className="grid md:grid-cols-2 h-screen p-3 md:p-8">
      <div className="bg-amber-50 rounded-3xl"></div>
      <div className=" flex justify-center flex-col px-18 w-full">
        <form className="w-full  max-w-md">
        
            <Link to="/login" className="flex gap-2 mb-6 text-blue-700">
              <ArrowLeft />
              <p>Back</p>
            </Link>
       
          <h1 className="text-3xl font-bold mb-3">Forget Password</h1>
          <p className="text-gray-400 mt-1">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </p>
          <div className=" border px-4 py-1 rounded-xl border-blue-600 mt-3">
            <label htmlFor="email" className="text-sm text-blue-700">
              Email Address
            </label>
            <input
              type="email"
              className="w-full outline-none m"
              placeholder="Enter your email to reset password "
            />
          </div>
          <button className="bg-blue-800 px-6 py-3 rounded-xl mt-5 text-white w-full">
            Send Reset Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
