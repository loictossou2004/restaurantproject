import React from 'react'
import '../App.css'
import NavbarComponent from './Navbar'

function Contact() {


    return (
        <div className='overflow-hidden w-full font-Poppins text-center'>
            <NavbarComponent/>
            
            {/* Formulaire de contact */}
            <div className='w-full h-full space-y-11 py-12 animate-fadeIn mb-20'>
                <p className='text-3xl'>Contactez nous !!!</p>
                <div className='max-w-[90%] sm:max-w-[700px] w-full mx-auto mb-4 bg-white p-8 rounded-3xl shadow-lm space-y-3'>
                    <form action='' className='space-y-6'>
                        <div className='flex flex-col items-start'>
                            <label className='text-sm font-extrabold '>Nom</label>
                            <input type='text' placeholder='Saisissez votre identifiant' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='text-sm font-extrabold '>Adresse E-mail</label>
                            <input type='email' placeholder='Saisissez votre e-mail' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='text-sm font-extrabold '>Numéro de téléphone</label>
                            <input type="tel" /*pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"*/ placeholder='Saisissez votre numéro de téléphone' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='text-sm font-extrabold '>Message</label>
                            <textarea placeholder='Ecrivez ici' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold'></textarea>
                        </div>
                        <div className='flex justify-center font-bold bg-[#dfd10c] hover:scale-105 transition duration-500 hover:duration-500 cursor-pointer'>
                            <button className="font-bold whitespace-nowrap px-4 py-2 rounded-full text-xl text-white text-center">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
            
            
            {/* FOOTER */}
            <footer className='w-full h-auto flex justify-center items-center bg-[#dfd10c] animate-fadeIn sm:fixed sm:bottom-0'>
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

export default Contact
