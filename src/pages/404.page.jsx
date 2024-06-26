import { Link } from "react-router-dom";
import lightPageNotFoundImg from "../imgs/logo-light.png";
import darkPageNotFoundImg from "../imgs/logo-dark.png";
import lightFullLogo from "../imgs/logo-light.png";
import darkFullLogo from "../imgs/logo-dark.png";
import { ThemeContext } from "../App";
import { useContext } from "react";
import errorNotFound from "../imgs/404.png";

const PageNotFound = () => {

    let { theme } = useContext(ThemeContext);

    return (
        <section className="h-cover relative p-10 flex flex-col items-center gap-20 text-center">

            {/* <img src={ theme == "light" ? darkPageNotFoundImg : lightPageNotFoundImg } className="select-none border-2 border-grey w-72 object-cover rounded" /> */}
            <img src={errorNotFound} className="select-none w-72 object-cover rounded" />

            <h1 className="text-4xl font-gelasio leading-7">ไม่พบหน้า</h1>
            <p className="text-dark-grey text-xl leading-7 -mt-8">ไม่พบหน้าที่คุณกำลังตามหา กำลับไปยัง <Link to="/" className="text-black underline">หน้าแรก</Link></p>

            <div className="mt-auto">
                <img src={ theme == "light" ? darkFullLogo : lightFullLogo } className="h-14 object-contain block mx-auto select-none" />
                <p className="mt-5 text-dark-grey">คณะกรรมการนิสิตอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</p>
            </div>

        </section>
    )
}

export default PageNotFound;