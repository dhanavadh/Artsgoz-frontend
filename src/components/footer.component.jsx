import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'


  
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import darkLogo from "../imgs/logo-dark.png";
import lightLogo from "../imgs/logo-light.png";
import { useContext } from 'react';
import { storeInSession } from "../common/session";


function Footer() {    
    const unb = `underline-thickness-1 underline-offset-4 hover:underline cursor-pointer transition-colors duration-300`
    const hds = `mb-3 text-2xl font-medium title-font`

    let { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        
        let newTheme = theme == "light" ? "dark" : "light";

        setTheme(newTheme);

        document.body.setAttribute("data-theme", newTheme);

        storeInSession("theme", newTheme);

    }

    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
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
                                        <Link className={unb} to='/about'>หน่วยงานในสังกัด ก.อศ.</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/about'>ช่องทางการติดต่อ</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/about'>เอกสาร/แบบฟอร์ม</Link>
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
                                        <Link className={unb} to='/asset'>ตราสัญลักษณ์องค์กร</Link>
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
                                </nav>
                            </div>
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <p className={hds}>กิจกรรม
                                </p>
                                <nav className="mb-5 list-none">
                                    <li className="mt-3">
                                        <Link className={unb} to='https://www.instagram.com/arts_goz/' target='_blank'>ข่าวสาร/กิจกรรม</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/' >บทความ</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='/' >ชมรม</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='https://open.spotify.com/show/2Va46VL9Nf2OKy4KnNQQmg?si=c667cef8f9e14a09' target='_blank'>Arts Podcast</Link>
                                    </li>
                                </nav>
                                <p className={hds}>ช่วยเหลือ/ร้องเรียน</p>
                                <nav className="mb-5 list-none">
                                    {/* <li className="mt-3">
                                        <Link className={unb} to='/faq'>คำถามที่พบบ่อย</Link>
                                    </li> */}
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
                                        <Link className={unb} onClick={open} >ข้อกำหนดการใช้งาน</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='https://www.arts.chula.ac.th/goz/asset/artsgoz_ci.pdf' target='_blank'>Artsgoz Website
                                        Identity Guideline</Link>
                                    </li>
                                    <li className="mt-3">
                                        <Link className={unb} to='https://github.com/artsgoz' target='_blank' >GitHub Repository</Link>
                                    </li>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm capitalize text-center">Copyright © 2024 Artsgoz. สงวนสิทธิ์ทุกประการ
                        </p>
                    </div>
                </footer>
            </div>  

            {/* acknowledgement Dialog */}
            {/* <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                    transition
                    className="w-full max-w-md rounded-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)]"
                    >
                    <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                        Payment successful
                    </DialogTitle>
                    <p className="mt-2 text-sm/6 text-white/50">
                        Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                        order.
                    </p>
                    <div className="mt-4">
                        <Button
                        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                        onClick={close}
                        >
                        Got it, thanks!
                        </Button>
                    </div>
                    </DialogPanel>
                </div>
                </div>
            </Dialog>       */}
            <Dialog as="div" className="relative z-10" open={isOpen} onClose={close}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                 <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6"
                  >
                    ข้อกำหนดการใช้งาน
                  </Dialog.Title>
                  <div className="mt-3">
                    <p className="text-lg font-light">
                    การใช้งานเว็บไซต์ <strong>Artsgoz – คณะกรรมการนิสิตอักษรศาสตร์</strong> นี้ เป็นที่ยอมรับว่าท่านได้อ่านและเข้าใจข้อตกลงการใช้งานเว็บไซต์และท่านตกลงที่จะผูกพันและปฏิบัติตามข้อตกลงการใช้งานเว็บไซต์นี้ โปรดอย่าใช้งานเว็บไซต์นี้หากท่านไม่ตกลงที่จะผูกพันตามข้อตกลงการใช้งานนี้
                    </p>                    
                  </div>
                  <div className="mt-3">
                    <p className='text-2xl mb-2'>การใช้และการเปิดเผยข้อมูลส่วนบุคคล</p>
                    <p className="text-lg font-light">
                    เว็บไซต์ <strong>Artsgoz – คณะกรรมการนิสิตอักษรศาสตร์</strong> นี้ จะไม่มีการขอข้อมูล หากท่านไม่ยินยอมที่จะใช้งานบริการใด ๆ ที่จำเป็นต้องขอข้อมูลท่าน หากท่านต้องการใช้งานบริการบางส่วนที่มีความจำเป็นต้องเก็บข้อมูลส่วนบุคคล เช่น การเขียนบทความ จะถือว่าท่านตกลงและยอมรับว่าข้อมูลส่วนบุคคลของท่านทั้งหมดจะถูกใช้งานภายในเว็บไซต์นี้เท่านั้น และจะไม่มีการเปิดเผยข้อมูลส่วนบุคคลของท่านให้กับบุคคลภายนอก
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className='text-2xl mb-2'>ข้อสงวนสิทธิในความรับผิด</p>
                    <p className="text-lg font-light">
                    ข้อมูลหรือเนื้อหาใด ๆ ที่ปรากฏบนเว็บไซต์ <strong>Artsgoz – คณะกรรมการนิสิตอักษรศาสตร์</strong> อาจมีส่วนที่ผิดพลาน ไม่ถูกต้อง หรือไม่ครบถ้วน และเว็บไซต์ไม่มีส่วนรับผิดใด ๆ ในเรื่องของความเสียหายที่เกิดขึ้นจากการใช้งานข้อมูลหรือเนื้อหาใด ๆ ที่ปรากฏบนเว็บไซต์นี้ และ ขอสงวนสิทธิในการแก้ไขเปลี่ยนแปลงเว็บไซต์และข้อมูลที่ระบุบนเว็บไซต์โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                    </p>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="btn-dark"
                      onClick={close}
                    >
                      รับทราบ
                    </button>
                  </div>
                </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </div>
    );
}

export default Footer;