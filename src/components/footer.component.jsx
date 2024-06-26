import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import darkLogo from "../imgs/logo-dark.png";
import lightLogo from "../imgs/logo-light.png";
import { useContext } from 'react';
import { storeInSession } from "../common/session";


function Footer() {    
    const unb = `underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300`
    const hds = `mb-3 text-2xl font-bold title-font`

    let { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        
        let newTheme = theme == "light" ? "dark" : "light";

        setTheme(newTheme);

        document.body.setAttribute("data-theme", newTheme);

        storeInSession("theme", newTheme);

    }
    return (
        <div>
            <div className="flex items-end w-full">
                <footer className="w-full text-gray">
                    <div
                        className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">                            
                        <div className="flex flex-wrap flex-grow w-64 mx-auto text-center md:mx-0 md:text-left pb-10">
                            <Link className="flex items-center justify-center md:h-16 h-13 md:mr-5 mb-5" href='/'>
                                <img src={ theme == "light" ? darkLogo : lightLogo }></img>
                            </Link>
                            <p className="text-md ">ห้อง 148 ชั้น M1 อาคารมหาจักรีสิรินธร <br></br> 254 ถนนพญาไท แขวงวังใหม่ <br></br> เขตปทุมวัน กรุงเทพมหานคร 10330 <br></br>022184897</p>
                            <div className="flex flex-wrap flex-grow mt-4 text-center ">
                                <span className="inline-flex justify-center mt-2  sm:ml-auto">
                                    <Link className="cursor-pointer" to='https://www.facebook.com/artsgozcu/' target='_blank'>
                                        <i className="fi fi-brands-facebook"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" to='https://twitter.com/arts_goz' target='_blank'>
                                        <i className="fi fi-brands-twitter"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" to='https://www.instagram.com/arts_goz/' target='_blank'>
                                        <i className="fi fi-brands-instagram"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" to='https://www.youtube.com/@GOZTVArtsCU' target='_blank'>
                                        <i className="fi fi-brands-youtube"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" to='https://open.spotify.com/show/2Va46VL9Nf2OKy4KnNQQmg?si=c667cef8f9e14a09' target='_blank'>
                                        <i className="fi fi-brands-spotify"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" to='https://github.com/artsgoz' target='_blank'>
                                        <i className="fi fi-brands-github"></i>
                                    </Link>
                                    <a className="ml-3 cursor-pointer">
                                    
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                            {/* ใช้ .map ฟังก์ชั่นไม่ได้คับ ต้องแก้ทีละตัว */}
                                <p className={hds}>เกี่ยวกับ ก.อศ.</p>
                                <nav className="mb-5 list-none">
                                    <li className="mt-3">
                                        <Link className={unb} to='/about'>คณะกรรมการและสมาชิก</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/about/dept'>หน่วยงานในสังกัด ก.อศ.</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/about'>ช่องทางการติดต่อ</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/docs'>เอกสาร/แบบฟอร์ม</Link>
                                    </li>    
                                </nav>
                                <p className={hds}>ฝ่ายประชาสัมพันธ์</p>
                                <nav className="mb-5 list-none">
                                    <li className="mt-3">
                                        <Link className={unb} to='https://airtable.com/appL41ESosi23CmVb/shrbDR35qe9WQfRP5' target='_blank'>ตารางงานประชาสัมพันธ์ทั้งหมด</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='https://airtable.com/appL41ESosi23CmVb/shrOw4kbtV4ghnpRW' target='_blank'>ติดต่อขอลงงานประชาสัมพันธ์ ก.อศ.</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/about/asset'>ตราสัญลักษณ์องค์กร</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <p className={hds}>บริการ</p>
                                <nav className="mb-5 list-none">
                                    <li className="mt-3">
                                        <Link className={unb} to='https://sites.google.com/view/regartscu/' target='_blank'>งานทะเบียน</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/service' >บริการทั้งหมด</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/search/a' >ค้นหาชื่ออาจารย์</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/editor' >เขียนบทความ</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/about/asset'>ตราสัญลักษณ์องค์กร</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <p className={hds}>กิจกรรม
                                </p>
                                <nav className="mb-5 list-none">
                                    <li className="mt-3">
                                        <Link className={unb} to='https://sites.google.com/view/regartscu/' target='_blank'>ข่าวสาร/กิจกรรม</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='#' >บทความ</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/about' >ชมรม</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='https://open.spotify.com/show/2Va46VL9Nf2OKy4KnNQQmg?si=c667cef8f9e14a09' target='_blank'>Arts Podcast</Link>
                                    </li>
                                </nav>
                                <p className={hds}>ช่วยเหลือ/ร้องเรียน</p>
                                <nav className="mb-5 list-none">
                                    <li className="mt-3">
                                        <Link className={unb} to='/faq'>คำถามที่พบบ่อย</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='https://linktr.ee/artsgoz' target='_blank' >ร้องเรียนปัญหาต่าง ๆ</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='https://linktr.ee/artsgoz' target='_blank' >ข้อเสนอแนะ/ความคิดเห็น ๆ</Link>
                                    </li>                                                             
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <p className={hds}>เกี่ยวกับเว็บไซต์</p>
                                <div className="mb-5 list-none">
                                    <li className="mt-3">
                                        <Link className={unb} to='/acknowledgement' >ข้อกำหนดการใช้งาน</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/support/privacy' >แผนผังเว็บไซต์</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='https://github.com/artsgoz' target='_blank' >GitHub Repository</Link>
                                    </li>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm capitalize xl:text-center">Copyright © 2024 Artsgoz. สงวนสิทธิ์ทุกประการ
                        </p>
                    </div>
                </footer>
            </div>        
        </div>
    );
}

export default Footer;