import type { NextPage } from 'next'

import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <div className="flex h-screen">
        <div className="bg-white flex-1">
          <img src="/assets/img/auth.jpg" alt="Auth" className="w-full h-full object-cover"  />
        </div>
        <div className="bg-[#FAFAFB] flex-1 flex items-center justify-center">
            <div className="bg-white w-3/5 p-16">
                <h3>Log in to your account</h3>
                <form className="my-4">
                    <div>
                        <label className="block text-sm mb-[3px]">
                        Email
                        </label>
                        <input 
                        className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                        type="text" />
                    </div>
                    <div>
                        <label className="block text-sm mb-[3px]">
                        Password
                        </label>
                        <input 
                        className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-10 px-4 mb-3"
                        type="text" />
                    </div>
                    <span className="text-xs">
                    Forgot Password? 
                    <Link href="/auth/reset-password">
                        <a className="text-[#0D70BF] ml-1">Reset Password</a> 
                    </Link>
                    </span>
                    <button 
                    className="bg-[#1379C6] focus:outline-none text-white block text-sm py-3.5 px-5 rounded mt-6 w-full" 
                    type="button">
                    Login
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login