import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai" ;

const Sidenav = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a href="#main" className="w-[75%] flex flex-row justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <span className="pl-4">Home</span>
                        </a>
                        <a href="#about" className="w-[75%] flex flex-row justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <span className="pl-4">About</span>
                        </a>
                        <a href="#works" className="w-[75%] flex flex-row justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <span className="pl-4">Works</span>
                        </a>
                        <a href="#contact" className="w-[75%] flex flex-row justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                )
                : (
                    ''
                )
            }
            <div className="md:block hidden fixed top z-10">
                <div className="flex">
                    <a href="#main" className="flex flex-row m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <span className="pl-4">Home</span>
                    </a>
                    <a href="#about" className="flex flex-row m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <span className="pl-4">About</span>
                    </a>
                    <a href="#works" className="flex flex-row m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <span className="pl-4">Works</span>
                    </a>
                    <a href="#contact" className="flex flex-row m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav;