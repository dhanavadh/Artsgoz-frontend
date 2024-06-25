import { useContext } from "react";
import AnimationWrapper from "../common/page-animation";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Link, Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../common/session";
import { ThemeContext, UserContext } from "../App";
import { authWithGoogle } from "../common/firebase";
import darkLogo from "../imgs/logo-dark.png";
import lightLogo from "../imgs/logo-light.png";

const UserAuthForm = ({ type }) => {

    let { userAuth: { access_token }, setUserAuth } = useContext(UserContext)

    let { theme, setTheme } = useContext(ThemeContext);

    const userAuthThroughServer = (serverRoute, formData) => {

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
        .then(({ data }) => {
            storeInSession("user", JSON.stringify(data))
            
            setUserAuth(data)
        })
        .catch(({ response }) => {
            toast.error(response.data.error)
        })

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        let serverRoute = type == "sign-in" ? "/signin" : "/signup";

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

        // formData
        let form = new FormData(formElement);
        let formData = {};

        for(let [key, value] of form.entries()){
            formData[key] = value;
        }

        let { fullname, email, password } = formData;

        // form validation

        if(fullname){
            if(fullname.length < 3){
                return toast.error("ชื่อต้องมีอย่างน้อย 3 ตัวอักษร")
           }
        }
       if(!email.length){
            return toast.error("กรุณาใส่อีเมล" )
       }
       if(!emailRegex.test(email)){
            return toast.error("อีเมลไม่ถูกต้อง" )
       }
       if(!passwordRegex.test(password)){
            return toast.error("รหัสผ่านควรมี 6 ตัวขึ้นไป และ ควรมีตัวพิมพ์เล็กและพิมพ์ใหญ่อย่างละ 1 ตัว")
       }

       userAuthThroughServer(serverRoute, formData)

    }

    const changeTheme = () => {
        
        let newTheme = theme == "light" ? "dark" : "light";

        setTheme(newTheme);

        document.body.setAttribute("data-theme", newTheme);

        storeInSession("theme", newTheme);

    }

    const handleGoogleAuth = (e) => {

        e.preventDefault();

        authWithGoogle().then(user => {
            
            let serverRoute = "/google-auth";

            let formData = {
                access_token: user.accessToken
            }

            userAuthThroughServer(serverRoute, formData)

        })
        .catch(err => {
            toast.error('มีปัญหากับการเข้าสู่ระบบผ่าน Google');
            return console.log(err)
        })

    }

    return (
        access_token ?
        <Navigate to="/" />
        :
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <Toaster />
                <form id="formElement" className="w-[80%] max-w-[400px]">
                    <Link to='/'>
                        <img src={ theme == "light" ? darkLogo : lightLogo } className="h-18" />
                    </Link>
                    <h1 className="text-2xl text-center mb-12 mt-12">
                        {type == "sign-in" ? "เข้าสู่ระบบ" : "ลงทะเบียน" }
                    </h1>

                    {
                        type != "sign-in" ?
                        <InputBox
                            name="fullname"
                            type="text"
                            placeholder="ชื่อเต็ม"
                            icon="fi-rr-user"
                        />
                        : ""
                    }

                    <InputBox
                        name="email"
                        type="email"
                        placeholder="อีเมล"
                        icon="fi-rr-envelope"
                    />

                    <InputBox
                        name="password"
                        type="password"
                        placeholder="รหัสผ่าน"
                        icon="fi-rr-key"
                    />

                    <button
                        className="btn-dark center mt-14"
                        type="submit"
                        onClick={handleSubmit}
                    >   
                        { type.replace("-", " ") }
                    </button>

                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black" />
                        <p className="text-black">หรือ</p>
                        <hr className="w-1/2 border-black" />
                    </div>

                    <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center"
                        onClick={handleGoogleAuth}
                    >
                        <img src={googleIcon} className="w-5" />
                        เข้าสู่ระบบผ่าน Google
                    </button>

                    {

                        type == "sign-in" ?
                        <p className="mt-6 text-dark-grey text-xl text-center">
                        ยังไม่มีบัญชี ?
                        <Link to="/signup" className="underline text-black text-xl ml-1" >
                            สมัครได้ที่นี่
                        </Link>  
                        </p>
                        :
                        <p className="mt-6 text-dark-grey text-xl text-center">
                        มีบัญชีแล้ว ?
                        <Link to="/signin" className="underline text-black text-xl ml-1" >
                            เข้าสู่ระบบที่นี่
                        </Link>  
                        </p>

                    }

                </form>
            </section>
        </AnimationWrapper>
    )
}

export default UserAuthForm;