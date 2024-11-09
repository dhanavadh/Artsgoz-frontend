import { useEffect, useState } from 'react';
import '../components/new.navbar.css';

  const logo = [
    'https://www.arts.chula.ac.th/goz/asset/icons/aw-nav.png',
    'https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png',
    'https://www.arts.chula.ac.th/goz/asset/icons/ap-nav.png'
  ]
  const btnDec = [
    `flex px-2 py-1 border-2 btn underline-thickness-1 hover:underline hover:bg-[#F2F2F2] hover:text-[#1F1F1F]
    cursor-pointer transition-colors duration-300`,
    `flex px-2 py-1 border-2 btn-active underline-thickness-1 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
    cursor-pointer transition-colors duration-300`
  ]
  const navtext = [
    `flex font-medium text-[#F2F2F2] underline-thickness-1 underline-offset-4 hover:underline 
    cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#f2f2f2]`,
    `flex font-medium text-[#1F1F1F] underline-thickness-1 underline-offset-4 hover:underline 
    cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-21 focus:ring-offset-1 focus:ring-[#1f1f1f]`
  ]
  


function Navbar() {    
    //NavCo
    const [color, setColor ] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 300){
            setColor(true)
        }else {
            setColor(false)
        }        

    }
    useEffect(() => {
      window.addEventListener('scroll', changeColor);
    }) 
    
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                    
                    {/* <div class="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5
                        bg-blue-500"></div> */}

                    
                    <nav className={color ? 'navbar-active' : 'navbar'}>

                    
                        <div className="flex items-center transition-colors duration-300">
                            <a className="cursor-pointer" href='/'>
                                    <img className="h-12 object-cover"
                                        src={color ? logo[1] : logo[0]} alt="Artsgoz">
                                    </img>
                            </a>
                        </div>

                    
                        <div className="items-center hidden space-x-8 lg:flex">
                            <a className={color ? navtext[1] : navtext[0]} href='/'>
                                หน้าแรก
                            </a>
                        </div>

                        <div className="items-center hidden space-x-5 lg:flex">
                            {/* //  */}

                            <a className={color ? btnDec[1] : btnDec[0]} >
                                เข้าสู่ระบบ
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg> */}
                            </a>
                            {/* <a class="flex px-2 py-1 border-2 btn underline-thickness-1 underline-offset-4 hover:underline hover:bg-[#1F1F1F] hover:text-[#F2F2F2]
                                cursor-pointer transition-colors duration-300" >
                                เข้าสู่ระบบ
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a> */}
                        </div>
                        <div className="lg:hidden flex items-center space-x-5">
                                <button
                                type="button"
                                className={color ? btnDec[1] : btnDec[0]}                                     
                                >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                </button>
                        </div>
                    </nav>
                </div>
            </div>        
        </div>
    );
}

export default Navbar;