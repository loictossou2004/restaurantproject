import React, {useState} from 'react'
import '../App.css'
// import NavbarComponent from './Navbar'

import WALL_1 from '../assets/wall_1.jpg'
import WALL_2 from '../assets/wall_5.jpg'
import WALL_3 from '../assets/wall_4.jpg'
// import SPRITE from '../assets/sprite.png'
// import COCA from '../assets/Coca.jpg'
// import MONSTER from '../assets/Monster.png'
import SAUCE from '../assets/Mediterranean.png'
import SAUCE_1 from '../assets/algerienne.jpg'
import SAUCE_2 from '../assets/andalouse.jpg'
import FRITE from '../assets/frites.jpg'
import NUGGETS from '../assets/Nuggets.jpg'
import RICE from '../assets/riz.jpg'
// import { ClipLoader } from 'react-spinners'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai'

// import {useNavigate} from 'react-router-dom'


function Order() {

    // const navigate = useNavigate()

    // const [CheckOrder, setCheckOrder] = useState(false);

    // const [loading, setLoading] = useState(false)

    // const updateLoading = () => {
    //     if (CheckOrder)
    //         setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // }

    
    const [Chawarma, setChawarma] = useState([
        {id: 1, number: 0, price: 2000, image: WALL_1, name: "Chawarma au poulet", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."},
        {id: 2, number: 0, price: 2000, image: WALL_2, name: "Chawarma au mouton", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."},
        {id: 3, number: 0, price: 2000, image: WALL_3, name: "Chawarma au boeuf", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."}
    ])
    
    // const [Drink, setDrink] = useState([
    //     {id: 1, number: 0, price: 500, image: SPRITE, name: "Sprite", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."},
    //     {id: 2, number: 0, price: 500, image: COCA, name: "Coca", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."},
    //     {id: 3, number: 0, price: 500, image: MONSTER, name: "Monster", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."}
    // ])

    const [Sauce, setSauce] = useState([
        {id: 1, number: 0, price: 300, image: SAUCE, name: "Sauce à l'ail", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."},
        {id: 2, number: 0, price: 300, image: SAUCE_1, name: "Sauce algerienne", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."},
        {id: 3, number: 0, price: 300, image: SAUCE_2, name: "Sauce andalouse", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."}
    ])

    const [Frite, setFrite] = useState([
        {id: 1, number: 0, price: 1000, image: FRITE, name: "Frite", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."},
        {id: 2, number: 0, price: 1000, image: NUGGETS, name: "Nuggets", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."},
        {id: 3, number: 0, price: 1000, image: RICE, name: "Frite", describe: "Aliqua reprehenderit excepteur aute adipisicing labore aute tempor officia sint id minim aliquip. Est officia irure sint id. Eu quis consequat ullamco occaecat minim est laboris. Incididunt esse in Lorem dolore amet cillum tempor magna."}
    ])

    const updateScoreByIndexShawarma = (index ) => {
        setChawarma(prevChawarma => {
          const updatedList = [...prevChawarma];
          updatedList[index] = {...updatedList[index], number: updatedList[index].number + 1};
          return updatedList;
        });
    };
    // const updateScoreByIndexDrink = (index ) => {
    //     setDrink(prevChawarma => {
    //       const updatedList = [...prevChawarma];
    //       updatedList[index] = {...updatedList[index], number: updatedList[index].number + 1};
    //       return updatedList;
    //     });
    // };
    const updateScoreByIndexSauce = (index ) => {
        setSauce(prevChawarma => {
          const updatedList = [...prevChawarma];
          updatedList[index] = {...updatedList[index], number: updatedList[index].number + 1};
          return updatedList;
        });
    };
    const updateScoreByIndexFrite = (index ) => {
        setFrite(prevChawarma => {
          const updatedList = [...prevChawarma];
          updatedList[index] = {...updatedList[index], number: updatedList[index].number + 1};
          return updatedList;
        });
    };

    const DecreaseScoreByIndexShawarma = (index ) => {
        if (Chawarma[index].number !== 0)
            setChawarma(prevChawarma => {
            const updatedList = [...prevChawarma];
            updatedList[index] = {...updatedList[index], number: updatedList[index].number - 1};
            return updatedList;
        });
    };
    // const DecreaseScoreByIndexDrink = (index ) => {
    //     if (Drink[index].number !== 0)
    //         setDrink(prevChawarma => {
    //         const updatedList = [...prevChawarma];
    //         updatedList[index] = {...updatedList[index], number: updatedList[index].number - 1};
    //         return updatedList;
    //         });
    // };
    const DecreaseScoreByIndexSauce = (index ) => {
        if (Sauce[index].number !== 0)
            setSauce(prevChawarma => {
            const updatedList = [...prevChawarma];
            updatedList[index] = {...updatedList[index], number: updatedList[index].number - 1};
            return updatedList;
            });
    };
    const DecreaseScoreByIndexFrite = (index ) => {
        if (Frite[index].number !== 0)
            setFrite(prevChawarma => {
            const updatedList = [...prevChawarma];
            updatedList[index] = {...updatedList[index], number: updatedList[index].number - 1};
            return updatedList;
            });
    };

    // const ChangeCheckOrder = () => {
    //     const isOrderChecked = [...Chawarma, ...Drink, ...Sauce, ...Frite].some((item) => item.number > 0);
    //     setCheckOrder(isOrderChecked);
    // };

    // useEffect(() => {
    //     ChangeCheckOrder();
    //   }, [Chawarma, Drink, Sauce, Frite]);

    return (
        <div className='overflow-hidden w-full font-Poppins text-center'>
            {/* <NavbarComponent/> */}

            {/* Choix du chawarma */}
            <div className='w-full h-auto animate-fadeIn mt-6'>
                <p className='text-2xl'>Choisissez votre <span className='text-[#dfd10c] font-bold'>Shawarma</span></p>
                <div className='w-full h-auto'>
                    <div className='md:max-w-[90%] max-w-[90%] h-full w-full flex md:flex-row flex-col mx-auto py-4 overflow-hidden rounded-3xl object-contain md:space-x-10 md:space-y-0 space-y-10'>
                        {Chawarma.map(Chawarma => (
                            <div className='flex flex-col space-x-5 w-full h-full object-none bg-white rounded-md shadow-lm border' key={Chawarma.id}>
                                <img src={Chawarma.image} alt='' className='rounded-md w-full object-cover h-[250px]'></img>
                                <div className='text-left py-4 px-2 space-y-4'>
                                    <div className='flex justify-between'>
                                        <p className='text-xl text-[#dfd10c] font-bold '>{Chawarma.name}</p>
                                        <div className='flex space-x-5'>
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#dfd10c] flex justify-center items-center'>
                                                <AiOutlineMinus color='white' className='cursor-pointer' onClick={() => DecreaseScoreByIndexShawarma(Chawarma.id - 1)}></AiOutlineMinus>
                                            </div>
                                            <p>{Chawarma.number}</p>
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#dfd10c] flex justify-center items-center'>
                                                <AiOutlinePlus color='white' className='cursor-pointer' onClick={() => updateScoreByIndexShawarma(Chawarma.id - 1)}></AiOutlinePlus>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='font-bold'>{Chawarma.price} FCFA</p>
                                    <hr className='w-[95%]'></hr>
                                    <p className=''>{Chawarma.describe}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Choix des extras */}
            <div className='w-full h-auto animate-fadeIn mt-6'>
                <p className='text-2xl'>Choisissez vos <span className='text-[#dfd10c] font-bold'>Extras</span></p>
                <div className='w-full h-auto'>
                    <div className='md:max-w-[90%] max-w-[90%] h-full w-full flex md:flex-row flex-col mx-auto py-4 overflow-hidden rounded-3xl object-contain md:space-x-10 md:space-y-0 space-y-10'>
                        {Frite.map(Frite => (
                            <div className='flex flex-col space-x-5 w-full h-full object-none bg-white rounded-md shadow-lm border' key={Frite.id}>
                                <img src={Frite.image} alt='' className='rounded-md w-full object-cover h-[250px]'></img>
                                <div className='text-left py-4 px-2 space-y-4'>
                                    <div className='flex justify-between'>
                                        <p className='text-xl text-[#dfd10c] font-bold '>{Frite.name}</p>
                                        <div className='flex space-x-5'>
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#dfd10c] flex justify-center items-center'>
                                                <AiOutlineMinus color='white' className='cursor-pointer' onClick={() => DecreaseScoreByIndexFrite(Frite.id - 1)}></AiOutlineMinus>
                                            </div>
                                            <p>{Frite.number}</p>
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#dfd10c] flex justify-center items-center'>
                                                <AiOutlinePlus color='white' className='cursor-pointer' onClick={() => updateScoreByIndexFrite(Frite.id - 1)}></AiOutlinePlus>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='font-bold'>{Frite.price} FCFA</p>
                                    <hr className='w-[95%]'></hr>
                                    <p className=''>{Frite.describe}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Choix de la sauce */}
            <div className='w-full h-auto animate-fadeIn mt-6'>
                <p className='text-2xl'>Choisissez votre <span className='text-[#dfd10c] font-bold'>Sauce</span></p>
                <div className='w-full h-auto'>
                    <div className='md:max-w-[90%] max-w-[90%] h-full w-full flex md:flex-row flex-col mx-auto py-4 overflow-hidden rounded-3xl object-contain md:space-x-10 md:space-y-0 space-y-10'>
                        {Sauce.map(Sauce => (
                            <div className='flex flex-col space-x-5 w-full h-full object-none bg-white rounded-md shadow-lm border' key={Sauce.id}>
                                <img src={Sauce.image} alt='' className='rounded-md w-full object-cover h-[250px]'></img>
                                <div className='text-left py-4 px-2 space-y-4'>
                                    <div className='flex justify-between'>
                                        <p className='text-xl text-[#dfd10c] font-bold '>{Sauce.name}</p>
                                        <div className='flex space-x-5'>
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#dfd10c] flex justify-center items-center'>
                                                <AiOutlineMinus color='white' className='cursor-pointer' onClick={() => DecreaseScoreByIndexSauce(Sauce.id - 1)}></AiOutlineMinus>
                                            </div>
                                            <p>{Sauce.number}</p>
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#dfd10c] flex justify-center items-center'>
                                                <AiOutlinePlus color='white' className='cursor-pointer' onClick={() => updateScoreByIndexSauce(Sauce.id - 1)}></AiOutlinePlus>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='font-bold'>{Sauce.price} FCFA</p>
                                    <hr className='w-[95%]'></hr>
                                    <p className=''>{Sauce.describe}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Choix de la boisson */}
            {/* <div className='w-full h-auto animate-fadeIn mt-6'>
                <p className='text-2xl'>Choisissez votre <span className='text-[#dfd10c] font-bold'>Boissons</span></p>
                <div className='w-full h-auto'>
                    <div className='md:max-w-[90%] max-w-[90%] h-full w-full flex md:flex-row flex-col mx-auto py-4 overflow-hidden rounded-3xl object-contain md:space-x-10 md:space-y-0 space-y-10'>
                        {Drink.map(Drink => (
                            <div className='flex flex-col space-x-5 w-full h-full object-none bg-white rounded-md shadow-lm border' key={Drink.id}>
                                <img src={Drink.image} alt='' className='rounded-md w-full object-cover h-[250px]'></img>
                                <div className='text-left py-4 px-2 space-y-4'>
                                    <div className='flex justify-between'>
                                        <p className='text-xl text-[#dfd10c] font-bold '>{Drink.name}</p>
                                        <div className='flex space-x-5'>
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#dfd10c] flex justify-center items-center'>
                                                <AiOutlineMinus color='white' className='cursor-pointer' onClick={() => DecreaseScoreByIndexDrink(Drink.id - 1)}></AiOutlineMinus>
                                            </div>
                                            <p>{Drink.number}</p>
                                            <div className='w-[20px] h-[20px] rounded-full bg-[#dfd10c] flex justify-center items-center'>
                                                <AiOutlinePlus color='white' className='cursor-pointer' onClick={() => updateScoreByIndexDrink(Drink.id - 1)}></AiOutlinePlus>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='font-bold'>{Drink.price} FCFA</p>
                                    <hr className='w-[95%]'></hr>
                                    <p className=''>{Drink.describe}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* Validation de la commande */}
            {/* <div className='w-full h-full py-7 flex justify-center'>
                <button onClick={() => updateLoading()} className={CheckOrder ? 'text-white bg-[#dfd10c] p-5 rounded-md font-bold hover:scale-110 duration-200 flex justify-center items-center space-x-5' : 'text-white bg-[#DCD573] p-5 rounded-md font-bold flex'}>
                    <ClipLoader color="#FFFF" loading={loading} size={20} aria-label="Loading Spinner" data-testid="loader"/>
                    <p>Validez la commande</p>
                </button>
            </div> */}

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

export default Order