import React, { useState } from 'react'
import NavbarPage from '../header'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import { FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';

function AccountPage() {
  const navigate = useNavigate();
  const { authData } = useAuth();
  const [see,setSee] = useState(false)
  const [password,setPassword] = useState(false)
  const jwtToken = Cookies.get("jwt_token")
  const handleLogout = ()=>{
    if (jwtToken!==undefined) {
      Cookies.remove("jwt_token")
      navigate("/login",{replace:true})
    }
  }
  const originalPass = authData.password
  const star = '*'.repeat(originalPass.length);

  const seePassword = () => {
    setPassword(true)
    setSee(true)
  }

  const HidePassword = () => {
    setPassword(false)
    setSee(false)
  }

  return (
    <div>
      <div className='bg-black h-[76px]'>
        <NavbarPage />
      </div>
      <div className="flex justify-center items-center h-[77vh] bg-black">
        <div className="w-full max-w-2xl bg-white p-8">
          <h1 className="text-2xl font-bold mb-6">Account</h1>

          {/* Membership Section */}
          <div className="border-t border-b py-4">
            <p className="text-gray-500 font-medium mb-2">Member ship</p>
            <p className='text-gray-500'><strong>Username:</strong> {authData.username}</p>
            <p className='text-gray-500'><strong>Password:</strong> {password? originalPass : star }</p>
            {!see ? <button className='bg-gray-300 border border-2 p-1 rounded-lg' onClick={seePassword}>see password</button> : <button className='bg-gray-300 border border-2 p-1 rounded-lg' onClick={HidePassword}>hide password</button> }
          </div>

          {/* Plan Details Section */}
          <div className="border-b py-4">
            <p className="text-gray-500 font-medium mb-2">Plan details</p>
            <div className="flex items-center gap-3">
              <span className="text-gray-800 font-medium">Premium</span>
              <span className="text-xs border px-2 py-1 rounded bg-gray-100 text-gray-700">
                Ultra HD
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-2 rounded cursor-pointer" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-x-6 justify-center items-center bg-black p-5">
        <div className='flex'>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <FaGoogle className="text-red-500 text-3xl hover:text-red-700 transition duration-300 mr-2" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300 mr-2" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-500 text-3xl hover:text-blue-700 transition duration-300 mr-2" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-600 text-3xl hover:text-red-800 transition duration-300 mr-2" />
          </a>
        </div>
        <p className='text-white'>Contact us</p>
      </div>
    </div>
  )
}

export default AccountPage
