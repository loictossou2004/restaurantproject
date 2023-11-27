import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import RESTO from '../assets/restaurant.png'
import SHOP from '../assets/shopping-bag.png'
import { useNavigate } from 'react-router-dom';


function NavbarComponent() {
  
    const navigate = useNavigate()

    const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full flex flex-col'>
      <div className='flex  justify-between items-center h-24 w-full mx-auto px-10 md:px-16 shadow-md'>
        <img src={RESTO} alt="Logo" className="md:h-20 h-14 w-auto " />


        <ul className='hidden md:flex whitespace-nowrap items-center'>
          <li className='p-4 font-bold border-b border-white bg-black text-white rounded-md hover:scale-110 duration-200 cursor-pointer' onClick={() => navigate("../")}>About us </li>
          <li className='p-4 font-bold border-b border-white cursor-pointer' onClick={() => navigate("../Menu")}>La Carte & Menu</li>
          {/* <li className='p-4 font-bold border-b border-white cursor-pointer'>Groupes/Events</li> */}
          <li to="#last-section" className='p-4 font-bold border-b border-white cursor-pointer' onClick={() => navigate('../Contact')}>Contact us</li>
          <img src={SHOP} alt="Logo" className="h-16 w-auto" />
        </ul>
        <div onClick={handleNav} className='block md-[821px]:hidden duration-700 ease-in-out'>
            {nav ? <AiOutlineClose size={30} className='cursor-pointer' /> : <AiOutlineMenu size={30} className='cursor-pointer'/>}
        </div>
      </div>
      <ul className={nav ? 'block ease-in-out duration-500 shadow-md space-y-5 py-4' : 'hidden ease-in-out duration-500'}>
          <li className='p-4 font-bold border-b border-[#d6cece] cursor-pointer' onClick={() => navigate("../")}>About us</li>
          <li className='p-4 font-bold border-b border-[#d6cece] cursor-pointer' onClick={() => navigate("../Menu")}>La Carte & Menu</li>
          <li className='p-4 font-bold border-b border-[#d6cece] cursor-pointer' onClick={() => navigate("../Contact")}>Contact us</li>
          {/* <li className='p-4 font-bold border-b border-[#d6cece] cursor-pointer'>Groupes/Events</li> */}
          <li className='p-4 font-bold cursor-pointer' onClick={() => navigate("../Order")}>Order online</li>
        </ul>
    </div>
  );
}

export default NavbarComponent