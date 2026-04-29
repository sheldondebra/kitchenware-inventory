import { CircleX, EyeClosed, EyeIcon, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useAsyncError, useNavigate } from 'react-router-dom';





const Login = () => {

  const [showPassword , setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const loginSpinner = <div role="status">
    <svg aria-hidden="true" class="w-8 h-8 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div> 

 
  const {
    register,
    handleSubmit,
    formState :{errors},
  } = useForm();

  const onSubmit = async (data) =>{
    setLoading(true)
    setLoginError("")

    try{
      console.log("Login data",data)


      // fake Login Data

      if(data.email === 'admin@admin.com' && data.password === '123456' ){
        navigate('/admin')
      }else if (data.email === 'sales@admin.com'  && data.password === '123456' ){
        navigate('/sales')
      }else{
        setLoginError('Invalid email or password')
      }
    
    }catch(err){
      setLoginError('Something went wrong. please try again' + err.message)
      console.log(err.message)
      
    }finally{
      setLoading(false)
    }


  }


  return (
    <div className="">
      <div className="grid md:grid-cols-2  h-screen p-3 md:p-8">
        <section className="bg-amber-50 rounded-3xl">
          <div></div>
        </section>

        <section className="flex flex-col  justify-center md:px-10 px-3">
          <div className="flex items-center gap-3 font-bold text-xl mb-8">
            <img src="/assets/logo.png" alt="logo" className="w-10 mb-5" />
            <h1>KitchenWare Inventory</h1>
          </div>
          <h1 className="text-2xl font-semibold mb-2">Welcome 👋🏾</h1>
          <p className="text-gray-500 mb-5">Please login here</p>

          {loginError && (
            <div className="mb-4 bg-red-50 text-red-700 p-3 max-w-max rounded-lg text-sm flex gap-3 items-center">
              <CircleX />
              {loginError}
            </div>
          )}

          <div>
            <form
              className="w-full max-w-md gap-4 flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="border flex-col flex w-full px-4  py-1 rounded-xl border-blue-600">
                <label
                  htmlFor="email"
                  className="text-[11px] mb-1  text-blue-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full outline-none"
                  placeholder="Enter your email address to login"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
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
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Type Password Here"
                    className="w-full outline-none  pr-12"
                    {...register("password", {
                      required: "Password is Required",
                      minLength: {
                        value: 5,
                        message: "Password must be at least 6 Characters",
                      },
                    })}
                  />
                  <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff /> : <EyeIcon />}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <p>Remember Me</p>
                </div>
                <Link to="/forgetpassword">Forget Password?</Link>
              </div>
              <button
                className="w-full bg-blue-800 px-6 py-3 rounded-xl text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? {loginSpinner} : 'log In' }
              </button>
              <div className='bg-amber-50 rounded-2xl px-5 py-6 mt-5 text-sm'>
                <p>Test Admin: admin@admin.com / 123456</p>
                <p>Test Sales: sales@admin.com / 123456</p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login
