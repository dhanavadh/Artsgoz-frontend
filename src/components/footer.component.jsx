import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import darkLogo from "../imgs/logo-dark.png";
import lightLogo from "../imgs/logo-light.png";
import { useContext } from 'react';
import { storeInSession } from "../common/session";


function Footer() {    


    const gozlink = [
        { name: 'คณะกรรมการและสมาชิก', href: 'about', target: '' },
        { name: 'หน่วยงานในสังกัด ก.อศ.', href: 'about/dept', target: '' },
        { name: 'การบริหารงานและความโปร่งใส', href: 'about/transparency', target: '' },
        { name: 'ช่องทางการติดต่อ', href: 'about/connect', target: '' },
        { name: 'เอกสาร/แบบฟอร์ม', href: 'about/docs', target: '' },
    ]
    const prlink = [
        { name: 'ตารางงานประชาสัมพันธ์ทั้งหมด', href: 'https://airtable.com/appL41ESosi23CmVb/shrbDR35qe9WQfRP5', target: '_blank' },
        { name: 'ติดต่อขอลงงานประชาสัมพันธ์', href: 'https://airtable.com/appL41ESosi23CmVb/shrOw4kbtV4ghnpRW', target: '_blank' },
        { name: 'ตราสัญลักษณ์องค์กร', href: 'about/asset', target: '' },
        { name: 'Asset งานประชาสัมพันธ์', href: 'about/asset', target: '' },
    ]
    const servlink = [
        { name: 'งานทะเบียน', href: 'https://sites.google.com/view/regartscu/', target: '_blank' },
        { name: 'บริการทั้งหมด', href: '/service', target: '' },
        { name: 'ค้นหาชื่ออาจารย์', href: '#', target: '' },
        { name: 'คำนวณเกรด', href: '/service/calc', target: '' },
        { name: 'คลังข้อมูลสำหรับนิสิต', href: '/service/asset', target: '' },
        { name: 'ตรวจสอบรายวิชาและอาจารย์ที่ปรึกษา', href: '/service/query/ttb', target: '' },
        { name: 'ตรวจสอบผลการสมัครกิจกรรมต่าง ๆ', href: '/service/query/activity', target: '' },
        { name: 'ตรวจสอบผลการคัดเลือกเอก', href: '/service/query/major', target: '' },
        { name: 'รีวิวรายวิชา', href: '/review/className', target: '' },
        { name: 'รีวิวเอกในคณะ', href: '/review/major', target: '' },
        { name: 'ArtsID', href: '/artsid', target: '' },
    ]
    const actlink = [
        { name: 'ข่าวสาร/กิจกรรม', href: '/activity', target: '' },
        { name: 'บทความ', href: '/lookup', target: '' },
        { name: 'ชมรม', href: '/club', target: '' },
        { name: 'Arts Podcast', href: '/podcast', target: '' },
    ]
    const supportlink = [
        { name: 'คำถามที่พบบ่อย', href: '/support/faq', target: '' },
        { name: 'ร้องเรียนปัญหาต่าง ๆ', href: '/support/report', target: '' },
        { name: 'ข้อเสนอแนะ/ความคิดเห็น', href: '/support/feedback', target: '' },
        { name: 'ตรวจสอบเรื่องที่ร้องเรียน', href: '/support/ticketchecker', target: '' },
    ]
    const aboutlink = [
        { name: 'นโยบายความเป็นส่วนตัว', href: '/support/privacy', target: '' },
        { name: 'ข้อกำหนดการใช้งาน', href: '/support/terms', target: '' },
        { name: 'ArtsLabs', href: '/artslabs', target: '' },
        { name: 'คลังข้อมูล', href: '/about/asset', target: '' },
        { name: 'แผนผังเว็บไซต์', href: '/sitemap', target: '' },
    ]
    const weblink = [
        { name: 'GOZ Portal', href: '/signin', target: '' },
        { name: 'Helpdesk Support', href: '/support/helpdesk', target: '' },    
    ]
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
                                    <Link className="cursor-pointer" href='https://www.facebook.com/artsgozcu/' target='_blank'>
                                        <i className="fi fi-brands-facebook"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" href='https://twitter.com/arts_goz' target='_blank'>
                                        <i className="fi fi-brands-twitter"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" href='https://www.instagram.com/arts_goz/' target='_blank'>
                                        <i className="fi fi-brands-instagram"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" href='https://www.youtube.com/@GOZTVArtsCU' target='_blank'>
                                        <i className="fi fi-brands-youtube"></i>
                                    </Link>
                                    <Link className="ml-3 cursor-pointer" href='https://open.spotify.com/show/2Va46VL9Nf2OKy4KnNQQmg?si=c667cef8f9e14a09' target='_blank'>
                                        <i className="fi fi-brands-spotify"></i>
                                    </Link>
                                    <a className="ml-3 cursor-pointer">
                                    
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <p className={hds}>เกี่ยวกับ ก.อศ.</p>
                                <nav className="mb-5 list-none">
                                    {gozlink.map((item) => (
                                        <li className="mt-3">
                                            <Link className={unb} to={item.href}>{item.name}</Link>
                                        </li>
                                    ))}
                                </nav>
                                <p className={hds}>ฝ่ายประชาสัมพันธ์</p>
                                <nav className="mb-5 list-none">
                                    {prlink.map((item) => (
                                        <li className="mt-3">
                                            <Link className={unb} href={item.href} target={item.target}>{item.name} </Link>
                                        </li>
                                    ))}
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <p className={hds}>บริการ</p>
                                <nav className="mb-5 list-none">
                                    {servlink.map((item) => (
                                        <li className="mt-3">
                                            <Link className={unb} href={item.href}>{item.name}</Link>
                                        </li>
                                    ))}
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <p className={hds}>กิจกรรม
                                </p>
                                <nav className="mb-5 list-none">
                                    {actlink.map((item) => (
                                        <li className="mt-3">
                                            <Link className={unb} href={item.href}>{item.name}</Link>
                                        </li>
                                    ))}
                                </nav>
                                <p className={hds}>ช่วยเหลือ/ร้องเรียน</p>
                                <nav className="mb-5 list-none">
                                    {supportlink.map((item) => (
                                        <li className="mt-3">
                                            <Link className={unb} href={item.href}>{item.name}</Link>
                                        </li>
                                    ))}                               
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <p className={hds}>เกี่ยวกับเว็บไซต์</p>
                                <div className="mb-5 list-none">
                                    {aboutlink.map((item) => (
                                        <li className="mt-3">
                                            <Link className={unb} href={item.href}>{item.name}</Link>
                                        </li>
                                    ))}
                                </div>
                                <p className={hds}>ภายในองค์กร
                                </p>
                                <nav className="mb-5 list-none">
                                    {weblink.map((item) => (
                                        <li className="mt-3">
                                            <Link className={unb} href={item.href}>{item.name}</Link>
                                        </li>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300">
                        <div className="container px-5 py-4 mx-auto">
                            <p className="text-sm text-gray-700 capitalize xl:text-center">Copyright © 2023 Artsgoz. สงวนสิทธิ์ทุกประการ
                            </p>
                        </div>
                    </div>
                </footer>
            </div>        
        </div>
    );
}

export default Footer;