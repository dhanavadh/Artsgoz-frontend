import { Link } from "react-router-dom"
import Footer from "../components/footer.component"

const Asset = () => {
  return (
    <>
        <div className='h-cover flex justify-center'>
        <div className='w-full m-10'>
            <p className="text-3xl font-medium ml-4">ดาวน์โหลด</p>
            <p className="text-lg mx-4 mt-3 text-justify">สามารถดาวน์โหลดตราสัญลักษณ์องค์กรได้ที่หน้านี้</p>
            <div className="mt-3">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow-md overflow-hidden">
                                <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-grey text-left text-xl font-semibold  uppercase tracking-wider"
                                    >
                                        ไฟล์
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-grey text-left text-xl font-semibold  uppercase tracking-wider"
                                    >
                                        รายละเอียด
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-grey text-left text-xl font-semibold  uppercase tracking-wider"
                                    >
                                        หมายเหตุ
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-grey text-left text-xl font-semibold"
                                    >
                                        ดาวน์โหลด
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/original.svg"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีดำ</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">svg file</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/original.svg" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีเทา</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/ab-nav.png" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/aw-nav.png"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีขาว</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/aw-nav.png" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/ap-nav.png"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีชมพู</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/ap-nav.png" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/banner_black.png"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีดำ</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">deprecated</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/banner_black.png" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/banner_goz.svg"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีดำ</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">deprecated/svg</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/banner_goz.svg" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/banner_white.png"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีขาว</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">deprecated</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/banner_white.png" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 h-20 w-20">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/logo_goz.png"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีเทา ตัวอักษรอยู่ด้านล่าง</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/logo_goz.png" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 h-20 w-20">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/logo_goz.svg"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีเทา ตัวอักษรอยู่ด้านล่าง</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">svg file</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/logo_goz.svg" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr> 
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 h-20 w-20">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/logo_goz_rounded_black.png"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีขาวพื้นหลังสีดำ ตัวอักษรอยู่ด้านล่าง ขอบกลม</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/logo_goz_rounded_black.png" target="_blank">ดาวน์โหลด</Link>                                            
                                    </td>
                                    </tr>                                                                   
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 h-20 w-20">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/icons/logo_goz_rounded_white.png"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">ตราสัญลักษณ์องค์กร ฉบับมีตัวอักษรสีดำพื้นหลังสีขาว ตัวอักษรอยู่ด้านล่าง ขอบกลม</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/icons/logo_goz_rounded_white.png" target="_blank">ดาวน์โหลด</Link>                                            
                                    </td>
                                    </tr> 
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/banner/8dCOiId6lJaxhgVS7UjcEjGy4mpFI4Zg.jpg"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">เทวาลัย 1</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/banner/8dCOiId6lJaxhgVS7UjcEjGy4mpFI4Zg.jpg" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/banner/zXLYJSTzyFG5oRX88cPyMpavATWCM7ZN.jpg"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">เทวาลัย 2</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/banner/zXLYJSTzyFG5oRX88cPyMpavATWCM7ZN.jpg" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                        <div className="flex-shrink-0 w-36 sm:w-48 h-full">
                                            <img
                                            className="w-full h-full"
                                            src="https://www.arts.chula.ac.th/goz/asset/banner/de3.jpg"
                                            alt=""
                                            />
                                        </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">เทวาลัย 3</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/banner/de3.jpg" target="_blank">ดาวน์โหลด</Link>    
                                        
                                    </td>
                                    </tr>                                                                    
                                    <tr>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <div className="flex">
                                            <p className="">เอกสาร</p>
                                        </div>

                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                        <p className="whitespace-no-wrap">Artsgoz Website Identity Guideline</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">
                                    <p className="whitespace-no-wrap">-</p>                                        
                                    </td>
                                    <td className="px-5 py-5 border-b border-grey bg-white text-sm">                                        
                                        <Link className="whitespace-no-wrap hover:underline" to="https://www.arts.chula.ac.th/goz/asset/artsgoz_ci.pdf" target="_blank">ดาวน์โหลด</Link>                                            
                                    </td>
                                    </tr>                                                                   
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer />
    </>
  )
}

export default Asset