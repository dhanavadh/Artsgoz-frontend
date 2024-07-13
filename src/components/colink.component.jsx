import { Link } from "react-router-dom"

const Colink = () => {
  return (
    <div>
        <h1 className="font-medium text-3xl mb-3">เว็บไซต์ที่เกี่ยวข้อง</h1>
        <div className="mb-2">
            <i className="fi fi-rr-arrow-small-right text-2xl absolute"></i>
            <Link to='https://www.arts.chula.ac.th/th/' target="_blank" className="text-xl hover:underline ml-6">คณะอักษรศาสตร์</Link>
        </div>
        <div className="mb-2">
            <i className="fi fi-rr-arrow-small-right text-2xl absolute"></i>
            <Link to='https://sites.google.com/view/regartscu/' target="_blank" className="text-xl hover:underline ml-6">งานทะเบียนคณะอักษรศาสตร์</Link>
        </div>
        <div className="mb-2">
            <i className="fi fi-rr-arrow-small-right text-2xl absolute"></i>
            <Link to='https://www.reg.chula.ac.th/th/' target="_blank" className="text-xl hover:underline ml-6">สำนักงานทะเบียน</Link>
        </div>
        <div className="mb-2">
            <i className="fi fi-rr-arrow-small-right text-2xl absolute"></i>
            <Link to='https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23db5f8e&ctz=Asia%2FBangkok&hl=en&showNav=1&showPrint=0&showCalendars=1&src=cmVnY2FsZW5kYXJAdGVhbS5jaHVsYS5hYy50aA&color=%23039BE5' target="_blank" className="text-xl hover:underline ml-6">[CUREG Calendar] ทวิภาค-ทวิภาคนานาชาติ</Link>
        </div>
    </div>
  )
}

export default Colink