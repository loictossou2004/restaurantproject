import React from 'react'
import '../App.css'
import NavbarComponent from './Navbar'
import DRINK_MENU from '../assets/Drink-menu.jpg'

function Menu() {


    return (
        <div className='overflow-hidden w-full font-Poppins text-center'>
            <NavbarComponent/>
     


            <div className='w-full h-auto animate-fadeIn mt-6'>
                <p className='text-2xl'>Nos <span className='text-[#dfd10c] font-bold'>Boissons</span></p>
                <div className='w-full h-auto'>
                    <div className='md:max-w-[90%] max-w-[90%] h-full w-full flex justify-center mx-auto py-4 overflow-hidden rounded-3xl object-contain md:space-x-10 md:space-y-0 space-y-10'>
                        <img src={DRINK_MENU} alt=''></img>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto animate-fadeIn mt-6'>
                <p className='text-2xl'>Nos <span className='text-[#dfd10c] font-bold'>Cocktails</span></p>
                <div className='w-full h-auto'>
                    <div className='md:max-w-[90%] max-w-[90%] h-full w-full flex justify-center mx-auto py-4 overflow-hidden rounded-3xl object-contain md:space-x-10 md:space-y-0 space-y-10'>
                        <img src={DRINK_MENU} alt=''></img>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto animate-fadeIn mt-6'>
                <p className='text-2xl'>Nos <span className='text-[#dfd10c] font-bold'>Accompagnements</span></p>
                <div className='w-full h-auto'>
                    <div className='md:max-w-[90%] max-w-[90%] h-full w-full flex justify-center mx-auto py-4 overflow-hidden rounded-3xl object-contain md:space-x-10 md:space-y-0 space-y-10'>
                        <img src={DRINK_MENU} alt=''></img>
                    </div>
                </div>
            </div>


            <footer className='w-full h-auto flex justify-center items-center bg-[#dfd10c] animate-fadeIn'>
                <div className='md:max-w-[80%] max-w-[90%] h-auto w-full mx-auto my-4 overflow-hidden  object-contain space-y-4' >                        
                    <div className='flex flex-col justify-center space-y-2  items-center'>
                        <p className='p-2 bg-white rounded-md text-[10px] font-bold'>Chez Rico 2023. Restaurant Chez Rico, Carrefour Saint Michel</p>
                        <p className='p-2 bg-white rounded-md text-[10px] font-bold'>Tel: +229 00 00 00 00 00</p>
                    </div>
                </div>
            </footer>





        </div>        
    )
}

export default Menu