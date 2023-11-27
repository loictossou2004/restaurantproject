import React from 'react'
import '../App.css'
// import NavbarComponent from './Navbar'
import CHICKEN from '../assets/kitchen.jpeg'
import NEVER from '../assets/Recettes.jpg'
import AFRICAN from '../assets/Tradi.jpeg'
import RESTO from '../assets/restaurant.png'
import INSTA from '../assets/instagram.png'
import TWITTER from '../assets/twitter.png'
import WHATSAPP from '../assets/whatsapp.png'
import WALL_1 from '../assets/wall_1.jpg'
import WALL_2 from '../assets/wall_2.jpeg'
import WALL_3 from '../assets/wall_3.jpeg'
import WALL_4 from '../assets/wall_4.jpg'
import WALL_5 from '../assets/wall_5.jpg'
import WALL_6 from '../assets/wall_6.jpeg'
import WALL_7 from '../assets/wall_7.jpeg'
import WALL_8 from '../assets/wall_8.jpg'
import WALL_9 from '../assets/wall_9.jpeg'
import WALL_10 from '../assets/wall_10.jpeg'
import WALL_11 from '../assets/wall_11.jpg'
import WALL_12 from '../assets/wall_12.jpeg'
import WALL_13 from '../assets/wall_13.jpg'
import STAR from '../assets/star.png'
import MEAT from '../assets/meat.png'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
// import { AiOutlineArrowDown } from 'react-icons/ai'
// import {useNavigate} from 'react-router-dom'
// import { useState } from 'react'
// import axios from 'axios'
// import { ClipLoader } from 'react-spinners'


function Home() {

    const [emblaRef]  = useEmblaCarousel({loop: false}, [Autoplay()])

    // const navigate = useNavigate()

    // const [loading, setLoading] = useState(false)
    // const [showSubmit, setShowSubmit] = useState(false)
    // const [showMessage, setShowMessage] = useState('')

    // const options = [
    //     {name: "1 personne", value: 1},
    //     {name: "2 personnes", value: 2},
    //     {name: "3 personnes", value: 3},
    //     {name: "4 personnes", value: 4},
    //     {name: "5 personnes", value: 5},
    //     {name: "6 personnes", value: 6},
    // ]

    // const [dataReservation, setDataReservation] = useState({
    //     name : "",
    //     email: "",
    //     date: "",
    //     time: "",
    //     numbers_person: 1
    //   })
    
    // const [dataContactUs, setDataContactUs] = useState({
    //     name : "",
    //     email: "",
    //     phoneNumber: "",
    //     message: ""
    // })




    // const Booked = async event =>  {
    //     event.preventDefault()
    //     try {
    //         // Send the form data to the backend
    //         setLoading(true)
    //         const response = await axios.post('http://localhost:8000/booked',
    //             {   
    //                 name : dataReservation.name,
    //                 email: dataReservation.email,
    //                 date: dataReservation.date,
    //                 time: dataReservation.time,
    //                 numbers_person: dataReservation.numbers_person
    //             });
    //         setTimeout(() => { setLoading(false) }, 2000)
    //         console.log(response.data); // Success message
    //         setShowMessage(response.data)
    //         setShowSubmit(true)
    //         setTimeout(() => { setShowSubmit(false) }, 5000)
    //         // setShowMessage('')
    //       } catch (error) {
    //         setTimeout(() => { setLoading(false) }, 3000)
    //         console.error('Error sending email:', error);
    //       }
    //     console.log(dataReservation)
    // }

    // const ContactUs = async event =>  {
    //     event.preventDefault()
    //     try {
    //         // Send the form data to the backend
    //         setLoading(true)
    //         const response = await axios.post('http://localhost:8000/ContactUs',
    //             {   
    //                 name : dataContactUs.name,
    //                 email: dataContactUs.email,
    //                 phoneNumber: dataContactUs.phoneNumber,
    //                 message: dataContactUs.message
    //             });
    //         setTimeout(() => { setLoading(false) }, 2000)
    //         console.log(response.data); // Success message
    //         setShowMessage(response.data)
    //         setShowSubmit(true)
    //         setTimeout(() => { setShowSubmit(false) }, 5000)
    //         // setShowMessage('')
    //       } catch (error) {
    //         setTimeout(() => { setLoading(false) }, 3000)
    //         console.error('Error sending email:', error);
    //       }
    //     console.log(dataContactUs)
    // }


    return (
        <div className='overflow-hidden w-full font-Poppins text-center'>
            {/* <NavbarComponent/> */}
            {/* Carousel */}
            <div className='w-full h-auto flex justify-center items-center animate-fadeIn'>
                <div className='w-full h-auto'>
                    <div className='md:max-w-[80%] max-w-[90%] md:h-[35rem] h-[25rem] w-full mx-auto my-4 bg-white overflow-hidden rounded-3xl object-contain space-y-8 shadow-xl' ref={emblaRef}>
                        <div className='flex space-x-14 w-full h-full object-none'>
                            <img src={NEVER} className='h-full w-full object-cover rounded-md' style={{flex: "0 0 100%"}} alt=''></img>
                            <img src={CHICKEN} className='h-full w-full object-cover rounded-md' style={{flex: "0 0 100%"}} alt=''></img>
                            <img src={AFRICAN} className='h-full w-full object-cover rounded-md' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto flex justify-center items-center animate-fadeIn'>
                <div className='md:max-w-[80%] max-w-[90%] h-auto w-full mx-auto my-4 overflow-hidden  object-contain space-y-4' >
                    <p className='text-xl'>Nous sommes ouverts du <span className='font-bold text-[#dfd10c]'>LUNDI au LUNDI</span></p>
                    <div className='flex justify-center space-x-12'>
                        {/* <p className='p-4 font-bold border-b border-white bg-[#dfd10c] text-white rounded-md hover:scale-110 duration-200 cursor-pointer' onClick={() => navigate('/#last-section')}>Carte du restaurant </p>
                        <p className='p-4 px-10 font-bold border-b border-white bg-[#dfd10c] text-white rounded-md hover:scale-110 duration-200 cursor-pointer' onClick={() => navigate("../Order")}>Order here</p> */}
                    </div>
                </div>
            </div>

            <div className='w-full h-auto flex justify-center items-center animate-fadeIn'>
                <div className='md:max-w-[80%] max-w-[90%] h-auto  w-full mx-auto overflow-hidden  object-contain space-y-4'>
                    <div className='flex justify-center items-center space-x-6 py-5'>
                        <p className=' font-bold text-xl'>Fais ta <span className='text-[#dfd10c]'>Réservation</span> ici</p>
                        <div className='flex justify-center items-center bg-white w-8 h-8 rounded-full shadow-lm animate-bounce'>
                            {/* <AiOutlineArrowDown size={20} color='#dfd10c' /> */}
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='max-w-[90%] sm:max-w-[700px] w-full mx-auto mb-4 bg-white p-8 rounded-3xl shadow-lm space-y-3 animate-fadeIn'>
                <p className='text-xl'>Les réservations sont ouvertes !!!</p>
                <p className='text-xl'> <span className=' font-bold'>ATTENTION</span> : Saisissez votre numero de télephone dans le formulaire sous le format +229...</p>
                {/* <form onSubmit={Booked} className='space-y-6'>
                    <div>
                        <input value={dataReservation.name} onChange={(e) => setDataReservation((data) => ({...data, name: e.target.value}) )} type='text' placeholder='Saisissez votre nom et prénom' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                    </div>
                    <div>
                        <input value={dataReservation.email} onChange={(e) => setDataReservation((data) => ({...data, email: e.target.value}) )} type='email' placeholder='Saisissez votre email' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                    </div>
                    <div>
                        <input value={dataReservation.date} onChange={(e) => setDataReservation((data) => ({...data, date: e.target.value}) )} type='date' placeholder='' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                    </div>
                    <div>
                        <input value={dataReservation.time} onChange={(e) => setDataReservation((data) => ({...data, time: e.target.value}) )} type='time' placeholder='' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-non border placeholder:font-extrabold' required/>
                    </div>
                    <select value={dataReservation.numbers_person} onChange={(e) => setDataReservation((data) => ({...data, numbers_person: parseInt(e.target.value)}) )} className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required>
                        {options.map(options => (
                            <option value={options.value} key={options.value}>{options.name}</option>
                        ))}
                    </select>
                    <div type='submit' className='flex py-1 justify-center items-center font-bold bg-[#dfd10c] hover:scale-105 transition duration-500 hover:duration-500 cursor-pointer'>
                        {loading ?
                            <ClipLoader color="#FFFF" loading={true} size={30} aria-label="Loading Spinner" data-testid="loader" className=''/>
                            :
                            <button className="font-bold whitespace-nowrap px-4 py-2 rounded-full text-xl text-white text-center">Réserver</button>
                        }                            
                    </div>
                </form> */}
            </div>
            {/* <div className={showSubmit ? 'w-full h-full  fixed top-0 animate-fadeIn' : 'hidden'}>
                <div className='flex justify-center items-center'>
                    <p className='bg-[#dfd10c] p-5 text-white rounded-lg'> {showMessage}</p>
                </div>
            </div> */}



            {/* Social Network for restaurant */}
            <div className='w-full h-full space-y-11 py-12 animate-fadeIn'>
                <div className='max-w-[90%]  w-full mx-auto mb-4 p-8 rounded-3xl space-y-10'>
                    <div className='flex justify-center items-center space-x-2'>
                        <img src={RESTO} alt="Logo" className="h-14 w-auto" />
                        <p className='font-bold'>Chez <span className='text-[#dfd10c] text-[3.2rem]'>RICO</span></p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex sm:justify-between justify-center items-center space-x-8 sm:space-x-2 w-1/2 '>
                            <img src={INSTA} alt="Logo" className="h-10 w-auto" />
                            <img src={WHATSAPP} alt="Logo" className="h-10 w-auto" />
                            <img src={TWITTER} alt="Logo" className="h-10 w-auto" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full space-y-11 py-12 animate-fadeIn'>
                <div className='max-w-[95%] md:max-w-[70%]  w-full mx-auto mb-4  rounded-3xl space-y-10'>
                    <div className='flex flex-wrap'>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={NEVER} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={CHICKEN} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={AFRICAN} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_1} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_2} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_3} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_4} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_5} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_6} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_7} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_8} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_9} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_10} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_11} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_12} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                        <div className='w-[50%] md:w-[25%] h-40'>
                            <img src={WALL_13} className='h-full w-full object-cover' style={{flex: "0 0 100%"}} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-full space-y-11 py-12 animate-fadeIn'>
                <p className='text-3xl'>Nos engagements</p>
                <div className='max-w-[90%] md:max-w-[80%] w-full mx-auto mb-4 bg-white  rounded-3xl space-y-20 md:space-y-0 flex flex-col md:flex-row items-center '>
                    <div className='md:w-1/2 w-full h-full flex flex-col justify-center items-center space-y-3'>
                        <img src={STAR} className='h-10 w-10 object-cover'  alt=''></img>
                        <h1 className='font-bold text-[#dfd10c] text-2xl'>Des aliments de qualités</h1>
                        <p className='px-0 md:px-16 text-left'>
                            Sit pariatur occaecat voluptate non est nisi officia est est id consectetur aliquip aliqua est.
                            Occaecat tempor irure quis enim magna. In officia id do dolore.
                            Proident exercitation ea reprehenderit tempor cillum.
                            Sit pariatur occaecat voluptate non est nisi officia est est id consectetur aliquip aliqua est.
                            Occaecat tempor irure quis enim magna. In officia id do dolore.
                            Proident exercitation ea reprehenderit tempor cillum.
                            Sit pariatur occaecat voluptate non est nisi officia est est id consectetur aliquip aliqua est.
                            Occaecat tempor irure quis enim magna. In officia id do dolore.
                            Proident exercitation ea reprehenderit tempor cillum.
                        </p>
                    </div>
                    <div className='md:w-1/2 w-full h-full flex flex-col justify-center items-center space-y-3'>
                        <img src={MEAT} className='h-10 w-10 object-cover'  alt=''></img>
                        {/* <h1 className='font-bold text-[#dfd10c] text-2xl'>De la viande d'exception</h1> */}
                        <p className='px-0 md:px-16 text-left'>
                            Sit pariatur occaecat voluptate non est nisi officia est est id consectetur aliquip aliqua est.
                            Occaecat tempor irure quis enim magna. In officia id do dolore.
                            Proident exercitation ea reprehenderit tempor cillum.
                            Sit pariatur occaecat voluptate non est nisi officia est est id consectetur aliquip aliqua est.
                            Occaecat tempor irure quis enim magna. In officia id do dolore.
                            Proident exercitation ea reprehenderit tempor cillum.
                            Sit pariatur occaecat voluptate non est nisi officia est est id consectetur aliquip aliqua est.
                            Occaecat tempor irure quis enim magna. In officia id do dolore.
                            Proident exercitation ea reprehenderit tempor cillum.
                        </p>
                    </div>
                </div>
            </div>


            <div className='flex flex-col justify-center items-center space-y-9 py-9 animate-fadeIn'>
                <p className='text-3xl'>Où sommes nous</p>
                <div className='flex md:flex-row flex-col justify-center items-center md:items-stretch w-full md:max-w-[70%] max-w-[90%]'>
                    <div className='bg-[#dfd10c] w-full text-white py-11'>
                        <p className=' text-2xl font-bold'>Location et adresse</p>
                        <div className='flex flex-col py-12'>
                            <p>Restaurant Chez Rico</p>
                            <p>Centre commercial Espace St-Quentin <br/> 8 quai François Truffaut <br/>78180 Montigny-le-Bretonneux</p>
                        </div>
                        <p className='py-8 text-xl font-bold'>Tel : +229 00 00 00 00 00</p>
                    </div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.0726217268457!2d2.4279929479018305!3d6.365147023912638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235594bf28d051%3A0x6fb8aeff9e296a51!2sEpitech%20Benin!5e0!3m2!1sfr!2sbj!4v1685617897253!5m2!1sfr!2sbj"
                        width="600" 
                        height="450"
                        style={{ border: "0", width: "100%" }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" title='location'>
                    </iframe> */}

                </div>
            </div>

            
            
            


            <div className='w-full h-full space-y-11 py-12 animate-fadeIn'>
                <p className='text-3xl'>Nous contacter</p>
                <div className='max-w-[90%] sm:max-w-[700px] w-full mx-auto mb-4 bg-white p-8 rounded-3xl shadow-lm space-y-3'>
                    {/* <form onSubmit={ContactUs} className='space-y-6'>
                        <div className='flex flex-col items-start'>
                            <label className='text-sm font-extrabold'>Nom</label>
                            <input value={dataContactUs.name} onChange={(e) => setDataContactUs((data) => ({...data, name: e.target.value}) )} type='text' placeholder='Saisissez votre identifiant' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='text-sm font-extrabold '>Adresse E-mail</label>
                            <input value={dataContactUs.email} onChange={(e) => setDataContactUs((data) => ({...data, email: e.target.value}) )} type='email' placeholder='Saisissez votre e-mail' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='text-sm font-extrabold '>Numéro de téléphone</label>
                            <input value={dataContactUs.phoneNumber} onChange={(e) => setDataContactUs((data) => ({...data, phoneNumber: e.target.value}) )} type="tel" placeholder='Saisissez votre numéro de téléphone' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold' required/>
                        </div>
                        <div className='flex flex-col items-start'>
                            <label className='text-sm font-extrabold '>Message</label>
                            <textarea value={dataContactUs.message} onChange={(e) => setDataContactUs((data) => ({...data, message: e.target.value}) )} placeholder='Ecrivez ici' className='w-full p-2 py-sm-3 rounded-md mt-1 outline-none border placeholder:font-extrabold'></textarea>
                        </div>
                        <div type="submit" className='flex py-1 justify-center font-bold bg-[#dfd10c] hover:scale-105 transition duration-500 hover:duration-500 cursor-pointer'>
                            {loading ?
                                <ClipLoader color="#FFFF" loading={true} size={30} aria-label="Loading Spinner" data-testid="loader" className=''/>
                                :
                                <button className="font-bold whitespace-nowrap px-4 py-2 rounded-full text-xl text-white text-center">Envoyer</button>
                            }
                            <button className="font-bold whitespace-nowrap px-4 py-2 rounded-full text-xl text-white text-center">Réserver</button>
                        </div>
                    </form> */}
                </div>
            </div>


            {/* Footer */}
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

export default Home