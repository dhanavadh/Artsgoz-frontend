import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import darkLogo from "../imgs/logo-dark.png";
import lightLogo from "../imgs/logo-light.png";
import { ThemeContext, UserContext } from '../App';
import UserNavigationPanel from "./user-navigation.component";
import axios from "axios";
import { storeInSession } from "../common/session";
import logo from "../imgs/logo.png";

const Navbar = () => {

    const [ searchBoxVisibility, setSearchBoxVisibility ] = useState(false)
    const [ userNavPanel, setUserNavPanel ] = useState(false);

    let { theme, setTheme } = useContext(ThemeContext);

    let navigate = useNavigate();

    const { userAuth, userAuth: { access_token, profile_img, new_notification_available }, setUserAuth } = useContext(UserContext);

    useEffect(() => {

        if(access_token){
            axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/new-notification", {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            })
            .then(({ data }) => {
                setUserAuth({ ...userAuth, ...data })
            })
            .catch(err => {
                console.log(err)
            })
        }

    }, [access_token])

    const handleUserNavPanel = () => {
        setUserNavPanel(currentVal => !currentVal);
    }

    const handleSearch = (e) => {
        let query = e.target.value;
        
        if(e.keyCode == 13 && query.length){
            navigate(`/search/${query}`);
        }
    }

    const handleBlur = () => {
        setTimeout(() => {
            setUserNavPanel(false);
        }, 200);
    }

    const changeTheme = () => {
        
        let newTheme = theme == "light" ? "dark" : "light";

        setTheme(newTheme);

        document.body.setAttribute("data-theme", newTheme);

        storeInSession("theme", newTheme);

    }

    const [color, setColor ] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 500){
            setColor(true)
        }else {
            setColor(false)
        }

    }
    window.addEventListener('scroll', changeColor);

    return (
        <>
            <nav className="navbar z-50">

                <Link to="/" className="flex gap-2 w-48">
                    <img src={ theme == "light" ? darkLogo : lightLogo } className="" />                    
                </Link>
                {/* <Link to="/" className="hidden lg:flex gap-2 w-48">
                    <img src={ theme == "light" ? darkLogo : lightLogo } className="" />                    
                </Link> */}
                {/* <Link to="/" className="flex lg:hidden">                    
                    <img src={logo} className="w-16" />
                </Link> */}

                <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + ( searchBoxVisibility ? "show" : "hide" )}>
                    <input 
                        type="text"
                        placeholder="ค้นหาบทความ/ชื่ออาจารย์"
                        className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 placeholder:text-dark-grey md:pl-12 rounded-full"
                        onKeyDown={handleSearch}
                    />

                    <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
                </div>

                <div className="flex items-center gap-3 md:gap-6 ml-auto">
                    <button className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
                    onClick={() => setSearchBoxVisibility(currentVal => !currentVal)}
                    >
                        <i className="fi fi-rr-search text-xl"></i>
                    </button>

                    <Link to="/editor" className="hidden md:flex gap-2 link">
                        {/* <i className="fi fi-rr-file-edit"></i> */}
                        <p className="text-lg">เขียนบทความ</p>
                    </Link>

                    <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10" onClick={changeTheme}>
                        <i className={"fi fi-rr-" + ( theme == "light" ?  "moon-stars" : "brightness" ) + " text-2xl block mt-1" }></i>
                    </button>

                    {
                        access_token ? 
                        <>
                            <Link to="/dashboard/notifications">
                                <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
                                    <i className="fi fi-rr-bell text-2xl block mt-1"></i>
                                    {
                                        new_notification_available ? 
                                        <span className="bg-red w-3 h-3 rounded-full absolute z-10 top-2 right-2"></span> : ""
                                    }
                                    
                                </button>
                            </Link>

                            <div className="relative" onClick={handleUserNavPanel} onBlur={handleBlur}>
                                <button className="w-12 h-12 mt-1">
                                    <img src={profile_img} className="w-full h-full object-cover rounded-full" />
                                </button>

                                {
                                    userNavPanel ? <UserNavigationPanel /> : ""
                                }

                            </div>
                        </>
                        :
                        <>
                            <div className="hidden md:flex">
                                <Link className="btn-dark-1" to="/signin">
                                เข้าสู่ระบบ                     
                                </Link>
                            </div>
                            <Link to='/signin'>
                                <button  className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center">
                                    <i className="fi fi-rr-user text-2xl block mt-1"></i>
                                </button>
                            </Link>
                            {/* <Link className="btn-light py-2 hidden md:block" to="/signup">
                                Sign Up
                            </Link> */}
                        </>
                    }

                </div>

            </nav>

            <Outlet />
        </>
    )
}

export default Navbar;