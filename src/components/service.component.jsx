import { Link } from "react-router-dom"

const BannerIn = [
    { name: 'ค้นหารายชื่ออาจารย์', description: `เคยสงสัยไหมว่าชื่อย่ออาจารย์ที่สอนคือใคร นิสิตสามารถค้นหาชื่อย่ออาจารย์ในคณะอักษรศาสตร์ได้แล้ววันนี้`, href: '/search/a', target: '', image: 'https://www.arts.chula.ac.th/goz/asset/banner/service/staffquery-banner.png' },    
    { name: 'บริการยืมร่ม', description: `ในวันที่ฝนตกแต่ลืมร่ม ให้ ก.อศ. ได้ดูแลคุณด้วย "บริการยืมร่ม" รายละเอียดเพิ่มเติมสามารถอ่านได้ผ่านฟอร์มต่าง ๆ ใน https://linktr.ee/artsgoz 
    บนหน้าไบโอแถบ "รวมฟอร์มสำหรับเพื่อนนิสิต" ได้เลย`, href: 'https://linktr.ee/artsgoz', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/banner/service/379976066_728358882662283_6502025623869856416_n.jpg' },    
    { name: 'บริการผ้าอนามัยฟรี', description: `ในวันนั้นของเดือน ให้ ก.อศ. ได้ดูแลคุณด้วย "บริการผ้าอนามัยฟรี"
    รายละเอียดเพิ่มเติมสามารถอ่านได้ผ่านฟอร์มต่าง ๆ ใน https://linktr.ee/artsgoz บนหน้าไบโอแถบ "รวมฟอร์มสำหรับเพื่อนนิสิต" ได้เลย`, href: 'https://linktr.ee/artsgoz', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/banner/service/380330773_728358852662286_5454192949241592895_n.jpg' },    
    { name: 'บริการยาสามัญฟรีและซื้อชุดตรวจโควิด', description: `ในวันที่เจ็บป่วย ให้ ก.อศ. ได้ดูแลคุณด้วย "บริการยาสามัญฟรีและซื้อชุดตรวจโควิด"
    รายละเอียดเพิ่มเติมสามารถอ่านได้ผ่านฟอร์มต่าง ๆ ใน https://linktr.ee/artsgoz บนหน้าไบโอแถบ "รวมฟอร์มสำหรับเพื่อนนิสิต" ได้เลย`, href: 'https://linktr.ee/artsgoz', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/banner/service/380485964_728358889328949_4125213418895721902_n.jpg' },    
]
const BannerIt = [
    { name: 'Adobe Creative Cloud', notice:'', description: `โปรแกรม Adobe เป็นโปรแกรมสำหรับสร้างสื่อมัลติมีเดียต่าง ๆ ประกอบด้วยชุดเครื่องมือที่เรียกว่า Adobe Creative Cloud
    ปรับเปลี่ยนวิธีการใช้งานใหม่ เริ่มใช้งานตั้งแต่วันที่ 28 เมษายน 2566 นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://creativecloud.adobe.com/apps/all', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/cc_p.svg' },    
    { name: 'CUNET Account Management', notice:'* ต้องใช้งานผ่าน VPN', description: `บริการเปลี่ยนรหัสผ่าน CUNET ด้วยตนเอง/รีเซ็ตรหัสผ่านด้วยตนเอง/ตั้งคำถาม-คำตอบเพื่อใช้ในการรีเซ็ตรหัสผ่าน นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://userportal.it.chula.ac.th/', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/accounts_p.svg', style: '' },
    { name: 'Chula Zoom', notice:'', description: `โปรแกรม Zoom เป็นโปรแกรมสำหรับการเรียนการสอน การประชุม ออนไลน์ นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://chula.zoom.us/', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/videocall_p.svg' },
    { name: 'Cisco Anyconnect', notice:'', description: `บริการ VPN เป็นบริการที่ทำให้ใช้บริการออนไลน์ต่าง ๆ จากภายนอกมหาวิทยาลัยได้ นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://www.it.chula.ac.th/service/cunet-vpn-service/', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/vpn_p.svg' },
    { name: 'Google Workspace', notice:'', description: `Google Workspace for Education สำหรับนิสิต และบุคลากรจุฬาฯ เป็นบริการทางเลือกในการทำงาน โดยมีเครื่องมือสำหรับทำงาน เช่น ระบบเอกสาร ระบบประชุมทางไกล ระบบเก็บข้อมูล และอื่น ๆ อีกมากมาย นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://apps.google.com/user/hub', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/assignment_p.svg' },
    { name: 'Office 365', notice:'', description: `Microsoft 365 เป็นบริการในการทำงาน โดยมีเครื่องมือสำหรับทำงาน เช่น ระบบเอกสาร ระบบการทำงานร่วมกัน ระบบประชุมทางไกล และบริการอื่น ๆ บน Cloud ของไมโครซอฟต์ นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://login.microsoftonline.com/?whr=chula.ac.th', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/jot_p.svg' },
    { name: 'ระบบยืมใช้งานซอฟต์แวร์', notice:'', description: `ยืมใช้งานซอฟต์แวร์ต่าง ๆ เช่น Zoom นิสิตสามารถดูรายละเอียดเพิ่มเติมได้ที่เว็บไซต์ https://www.it.chula.ac.th/`, href: 'https://licenseportal.it.chula.ac.th/', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/sdk_p.svg' },        
    
]
const BannerUniv = [
    { name: 'MindSpace โดย Chula Student Wellness', notice:'', description: `พื้นที่ของการดูแลจิตใจที่ Chula Student Wellness ได้รวบรวมบริการและความรู้ทางจิตวิทยาให้นิสิตและบุคคลทั่วไปที่สนใจ สามารถดูแลใจตนเองในเบื้องต้น รวมทั้งทำนัดหมายปรึกษานักจิตวิทยาหรือจิตแพทย์ ให้อยู่บนรูปแบบออนไลน์แพลตฟอร์ม`, href: 'https://chula.wellness.in.th', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/BannerUniv/Wellness.svg' },    
    { name: 'ศูนย์บริการสุขภาพแห่งจุฬาลงกรณ์มหาวิทยาลัย', notice:'', description: `ศูนย์บริการสุขภาพแห่งจุฬาฯ เปิดให้บริการทุกวันจันทร์ – วันศุกร์ ตั้งแต่ 8.00 – 15.00 น.`, href: 'http://www.cuhc.chula.ac.th/th/', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/BannerUniv/Charm9.svg' },
    { name: 'ศูนย์กีฬาแห่งจุฬาลงกรณ์มหาวิทยาลัย', notice:'', description: `ศูนย์กีฬาแห่งจุฬาลงกรณ์มหาวิทยาลัย จองสนามกีฬาออนไลน์และเช็คอินได้ง่ายๆในที่เดียว`, href: 'https://book.cusc.chula.ac.th', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/BannerUniv/Fitness.svg' },
    { name: 'ศูนย์นวัตกรรมการเรียนรู้', notice:'', description: `ศูนย์นวัตกรรมการเรียนรู้ เป็นหน่วยงานภายใต้สำนักงานมหาวิทยาลัย ก่อตั้งขึ้นเมื่อปี พ.ศ. 2553 เพื่อสนับสนุนนโยบายการปฏิรูปการเรียนรู้ของอุดมศึกษาไยในศตวรรษที่ 21`, href: 'https://lic.chula.ac.th', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/BannerUniv/LearningInnov.svg' },
    { name: 'CU POP BUS', notice:'', description: `สามารถดูตารางเดินรถแต่ละสายได้ที่นี่`, href: 'https://www.facebook.com/CUPOPBUS', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/BannerUniv/PopBus.svg' },
]
const BannerLearning = [
    { name: 'myCourseVille', notice:'', description: `ระบบการจัดการการเรียนการสอน (Learning Management System: LMS) ที่เชื่อมต่อกับสังคมออนไลน์`, href: 'http://mycourseville.com', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/services/mcv.png' },    
    { name: 'myCourseVille Alpha', notice:'', description: `ระบบการจัดการการเรียนการสอน (Learning Management System: LMS) ที่เชื่อมต่อกับสังคมออนไลน์`, href: 'https://alpha.mycourseville.com/', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/services/mcvalpha.png' },    
    { name: 'CHULA MOOC', notice:'', description: `การเรียนการสอนออนไลน์ในระบบเปิดสำหรับมหาชน (Massive Open Online Course : MOOC) ภายใต้โครงการ CHULA MOOC`, href: 'https://mooc.chula.ac.th', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/services/mooc.png' },        
    { name: 'Chula Reference Databases', notice:'', description: `บริการฐานข้อมูลทางวิชาการ นิสิตสามารถเข้าใช้งานได้เพียงใช้ CUNET Account ในการเข้าใช้งาน`, href: 'https://www.car.chula.ac.th/curef.php', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/services/chulaservice.png' },    
    { name: 'CU CAS', notice:'* ปัจจุบันสามารถประเมินได้ผ่านทาง myCourseVille', description: `ระบบประเมินการสอน`, href: 'https://cas.chula.ac.th/cas/', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/services/chulaservice.png' },        
    { name: 'Endnote', notice:'', description: `โปรแกรมสำเร็จรูปที่ใช้ในการจัดการกับรายการทางบรรณานุกรม หรือรายการอ้างอิงที่ผู้ใช้ได้ไปสืบค้นมาจากแหล่งข้อมูลต่าง ๆ โดยสำนักงานวิทยทรัพยากร`, href: 'https://www.car.chula.ac.th/endnote.php', target: '_blank', image: '' },    
    { name: 'Mendeley MIE Version', notice:'', description: `สำนักงานวิทยทรัพยากร จุฬาฯ ได้รับสิทธิ์การใช้งาน Mendeley Institutional Edition ซึ่งเป็นเวอร์ชั่น Premium upgrades สามารถใช้งานได้เพิ่มขึ้นจาก Mendeley เวอร์ชันปกติที่ไม่มีค่าใช้จ่าย`, href: 'https://www.car.chula.ac.th/mendeley.php', target: '_blank', image: '' },    
    { name: 'Turnitin', notice:'', description: `For instructor who need to use Turnitin, please fill out the request form to https://forms.gle/kvJ2PW1Mx5n9xYue7.`, href: 'https://www.car.chula.ac.th/turnitin.php', target: '_blank', image: '' },    
    { name: 'อักขราวิสุทธิ์', notice:'', description: `ระบบตรวจสอบการลอกเลียนวรรณกรรมทางวิชาการ โดย จุฬาลงกรณ์มหาวิทยาลัย`, href: 'https://app.akarawisut.com', target: '_blank', image: 'https://www.arts.chula.ac.th/goz/asset/2024icons/services/akara.png' },    
    { name: 'SciVal', notice:'', description: `ฐานข้อมูลที่ผู้ใช้สามารถเข้าถึงข้อมูลศักยภาพการวิจัย ทั้งในระดับโลก ระดับประเทศ ระดับมหาวิทยาลัย หรือระดับนักวิจัย สามารถดูข้อมูลการเปรียบเทียบศักยภาพการวิจัย รวมถึงข้อมูลความร่วมมือด้านการวิจัย`, href: 'https://www.car.chula.ac.th/scival.php', target: '_blank', image: '' },    
    
]
const BannerPartner = [
    { name: 'CU Get Reg', notice:'', description: `สามารถค้นหาและเลือกรายวิชาได้อย่างสะดวก และจัดตารางเรียนตามข้อจำกัดของหลักสูตรของแต่ละคนได้ง่ายขึ้น โดย ชมรม Thinc. จุฬาลงกรณ์มหาวิทยาลัย`, href: 'https://cugetreg.com/', target: '_blank', image: 'https://cugetreg.com/_next/static/media/cgrLogoDark.1e8c4bde.svg' },    
    { name: 'Gen อย่าได้ Ed', notice:'', description: `ศูนย์กลางการแลกเปลี่ยนข้อมูลและคำแนะนำรายวิชา Gened`, href: 'https://www.facebook.com/genedahs', target: '_blank', image: '' },        
]

const ServiceDetail = () => {
  return (
    <div>
        <div className='grid w-full'>

                <div className='grid px-1'>
                    <div className='grid text-3xl font-medium leading-relaxed mb-3'>
                        บริการทั้งหมด
                    </div>
                    <div className='flex text-xl leading-relaxed pb-5'>
                        <p className=''>นิสิตสามารถดูบริการทั้งหมดที่สามารถใช้งานได้ที่นี่ ทั้งนี้ ข้อมูลอาจมีการเปลี่ยนแปลง โปรดตรวจสอบข้อมูลจากผู้ให้บริการอีกครั้ง</p>
                    </div>                   
                    <hr className="my-5 border-grey"/>
                    <div className='grid'>
                        <p className='text-2xl pb-3 font-medium'>บริการจากคณะอักษรศาสตร์</p>
                        <p className=' pb-3 pl-3'>นิสิตอักษรศาสตร์สามารถเข้ารับบริการเหล่านี้ที่ห้อง ก.อศ. ชั้น M1 อาคารมหาจักรีสิรินธร</p>
                                <div className='grid grid-cols-1 gap-4 pb-3 pl-3'>
                                  {BannerIn.map((item) => (
                                    <div className="flex flex-col bg-white drop-shadow-2xl  md:flex-row" key={item.name}>
                                    <img
                                        className="h-96 w-full object-cover md:h-auto md:w-48"
                                        src={item.image}
                                        alt="" />
                                    <div className="flex flex-col justify-start p-6">
                                        <Link
                                        className="mb-5 text-xl font-medium  underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        to={item.href} target={item.target}>
                                        {item.name}
                                        </Link>
                                        <p className="mb-5 text-base  text-ellipsis overflow-hidden">
                                        {item.description}
                                        </p>
                                    </div>
                                    </div>
                                  ))}
                                </div>
                        </div>                                            
                        <div className='pb-5'>
                    </div>
                    <hr className="my-5 border-grey"/>
                    <div className='grid'>
                        <div className='text-2xl pb-3 font-medium'>บริการจาก IT Chula</div>
                        <div className=' pb-3 pl-3'>สามารถดูบริการสำหรับนิสิตโดยมหาวิทยาลัยได้ที่นี่</div>
                                <div className='grid grid-cols-1 gap-4 pb-3 pl-3'>
                                  {BannerIt.map((item) => (
                                    <div className="flex flex-col bg-white drop-shadow-2xl border border-2 border-white md:flex-row" key={item.name}>
                                    <div className="flex justify-start p-6">
                                        <img src={item.image} className="h-12 w-12 mr-5"></img>
                                        <div className="flex flex-col">
                                          <a
                                          className="mb-1 text-xl font-medium  underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                          href={item.href} target={item.target}>
                                          {item.name}
                                          </a>
                                          <a className='mb-2 text-md font-medium text-pink-500'>{item.notice}</a>
                                          <p className="mb-1 text-base  text-ellipsis overflow-hidden">
                                          {item.description}
                                          </p>
                                        </div>
                                    </div>
                                    </div>
                                  ))}
                                </div>
                        </div>                                            
                        <div className='pb-5'>
                    </div>
                    <hr className="my-5 border-grey"/>
                    <div className='grid'>
                        <div className='text-2xl pb-3 font-medium'>บริการจากมหาวิทยาลัย</div>
                        <div className=' pb-3 pl-3'>สามารถดูบริการด้าน IT สำหรับนิสิตได้ที่นี่</div>
                        <div className='grid grid-cols-1 gap-4 pb-3 pl-3'>
                                  {BannerUniv.map((item) => (
                                    <div className="flex flex-col bg-white drop-shadow-2xl border border-2 border-white md:flex-row" key={item.name}>
                                    <div className="flex justify-start p-6">
                                        <img src={item.image} className="h-12 w-12 mr-5"></img>
                                        <div className="flex flex-col">
                                          <a
                                          className="mb-1 text-xl font-medium  underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                          href={item.href} target={item.target}>
                                          {item.name}
                                          </a>
                                          <a className='mb-2 text-md font-medium text-pink-500'>{item.notice}</a>
                                          <p className="mb-1 text-base  text-ellipsis overflow-hidden">
                                          {item.description}
                                          </p>
                                        </div>
                                    </div>
                                    </div>
                                  ))}
                                </div>
                        </div>                                            
                        <div className='pb-5'>
                    </div>
                    <hr className="my-5 border-grey"/>
                    <div className='grid'>
                        <div className='text-2xl pb-3 font-medium'>บริการทางการศึกษา</div>
                        <div className=' pb-3 pl-3'>สามารถดูบริการทางการศึกษาได้ที่นี่</div>
                        <div className='grid grid-cols-1 gap-4 pb-3 pl-3'>
                                  {BannerLearning.map((item) => (
                                    <div className="flex flex-col bg-white drop-shadow-2xl border border-2 border-white md:flex-row" key={item.name}>
                                    <div className="flex justify-start p-6">
                                        <img src={item.image} className="h-12 w-12 mr-5"></img>
                                        <div className="flex flex-col">
                                          <a
                                          className="mb-1 text-xl font-medium  underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                          href={item.href} target={item.target}>
                                          {item.name}
                                          </a>
                                          <a className='mb-2 text-md font-medium text-pink-500'>{item.notice}</a>
                                          <p className="mb-1 text-base  text-ellipsis overflow-hidden">
                                          {item.description}
                                          </p>
                                        </div>
                                    </div>
                                    </div>
                                  ))}
                                </div>                              
                        </div>                                            
                        <div className='pb-5'>
                    </div>
                    <hr className="my-5 border-grey"/>
                    <div className='grid'>
                        <div className='text-2xl pb-3 font-medium'>บริการอื่น ๆ จากเพื่อนนิสิต</div>
                        <div className=' pb-3 pl-3'>สามารถดูบริการสำหรับนิสิตโดยเพื่อนนิสิตได้ที่นี่</div>
                                <div className='grid grid-cols-1 gap-4 pb-3 pl-3'>
                                  {BannerPartner.map((item) => (
                                    <div className="flex flex-col bg-white shadow-xl  md:flex-row" key={item.name}>
                                    {/* <img
                                        className="h-96 w-full object-cover md:h-auto md:w-64"
                                        src={item.image}
                                        alt="" /> */}
                                    <div className="flex flex-col justify-start p-6">
                                        <a
                                        className="mb-2 text-xl font-medium  underline decoration-pink-500 decoration-4 hover:decoration-blue-500 underline-offset-4 cursor-pointer"
                                        href={item.href} target={item.target}>
                                        {item.name}
                                        </a>
                                        <a className='mb-3 text-md font-medium text-pink-500'>{item.notice}</a>
                                        <p className="mb-5 text-base  text-ellipsis overflow-hidden">
                                        {item.description}
                                        </p>
                                    </div>
                                    </div>
                                  ))}
                                </div>                                
                                
                        </div>                                            
                        <div className='pb-5'>
                    </div>                    
                </div>
        </div>
    </div>
  )
}

export default ServiceDetail