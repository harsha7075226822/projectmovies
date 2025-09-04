import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function NavbarPage() {
  const navigate = useNavigate()
  const [isSearch,setIsSearch] = useState(true)
  const { searchValue, setSearchValue } = useAuth();
  
  const handleSearchoption = () => {
    setIsSearch(false)
  }
  const handleInputChange = (e) => {
    setSearchValue(e.target.value)    
    if (e.target.value!=='') {
      navigate(`/movies-app/movies-search?search=${e.target.value}`, { replace: true })
    }
    else {
      navigate("/",{replace:true})
      setSearchValue('')      
    }
  }

  const handleAccount = () => {
    navigate("/account",{replace:true})
  }

  return (
    <>
      <nav  className="fixed top-0 left-0 w-full z-20 bg-gradient-to-b from-black/100 to-transparent py-4 px-8 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex justify-between">
        <img className="text-3xl font-extrabold text-red-600" src="https://res.cloudinary.com/dcttatiuj/image/upload/v1756137061/Group_7399_l7pcod.png" />

      {/* Middle - Links */}
        <ul className="flex space-x-4 text-white font-medium ml-10">
          <Link to="/home" className="hover:text-gray-300">
            <li>Home</li>
          </Link>
          <Link to="/popular" className="hover:text-gray-300">
            <li>Popular</li>
          </Link>
        </ul>
      </div>

      {/* Right - Search + Avatar */}
      <div className="flex items-center space-x-6">
        {isSearch ? (
          <FaSearch onClick={handleSearchoption} className="text-white cursor-pointer" size={20} />
        ) : (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={searchValue}
              placeholder="Search..."
              onChange={handleInputChange}
              className="bg-black text-white border border-white rounded-sm py-1 px-2 outline-none"
            />
            <button onClick={() => setIsSearch(true)} className="text-white">✕</button>
          </div>
        )}

        {/* <FaSearch className="text-white cursor-pointer hover:text-gray-300" /> */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User"
          onClick={handleAccount}
          className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
        />
        {/* <div onClick={handleLogout}>
          <button className="text-red-500 bg-white rounded-lg p-2 font-bold cursor-pointer hover:scale-110 transition-transform">Logout</button>
        </div> */}
      </div>
    </nav>
    {/* {searchElement!=="" ? <SearchMovie details={searchElement} /> :"" } */}
    </>
  );
}

export default NavbarPage;
