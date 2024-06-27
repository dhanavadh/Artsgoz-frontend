import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
        <p className="text-3xl font-medium">คณะกรรมการนิสิตอักษรศาสตร์ (ก.อศ.)</p>
        <p className="text-lg my-3 text-justify">เป็นสโมสรนิสิตที่ช่วยอำนวยความสะดวกด้านวิชาการ สวัสดิการ และกิจกรรมแก่นิสิตอักษรศาสตร์ โดยในปีการศึกษา 2567 นี้มีวิสัยทัศน์และนโยบาย ดังนี้</p>
        <p className="text-2xl mx-3 my-3">วิสัยทัศน์</p>
        <ul className="list-disc ml-7">
            <li className="list-outside py-1 text-justify">จัดกิจกรรมที่เข้าถึงความสนใจของนิสิตภายในคณะมากขึ้น และเพิ่มกิจกรรมภายนอกที่ร่วมมือกับหลากหลายคณะ แต่ยังคงเอกลักษณ์ความเป็นอักษรศาสตร์ และสร้างประโยชน์ เข้าถึงนิสิตภายในคณะ</li>
            <li className="list-outside py-1 text-justify">สร้างพื้นที่การทำงานที่เป็น พิ้นที่ปลอดภัยและสบายใจที่จะร่วมงานด้วยกัน  สามารถพูดคุยและแสดงความคิดเห็นกันได้อย่างเท่าเทียมและเปิดใจรับฟังกัน</li>
            <li className="list-outside py-1 text-justify">เป็นศูนย์กลางและกระบอกเสียงเพื่อประโยชน์สูงสุดของชาวอักษร</li>
        </ul>
        <hr className="border-grey my-5"/>
        <p className="text-2xl mx-3 my-3">นโยบาย</p>
        <ul className="list-disc ml-7">
            <li className="list-outside py-1 text-justify">เปิดโอกาสให้นิสิตได้แสดงความคิดเห็น</li>
            <li className="list-outside py-1 text-justify">สร้างสภาพแวดล้อมที่ดีในการทำงาน</li>
            <li className="list-outside py-1 text-justify">ป็นตัวแทนรักษาสิทธิและสวัสดิการของนิสิตในคณะ</li>
            <li className="list-outside py-1 text-justify">สนับสนุนการจัดกิจกรรมที่เป็นประโยชน์ต่อนิสิตในคณะสำหรับการเตรียมความพร้อมให้นิสิตในอนาคต</li>
            <li className="list-outside py-1 text-justify">ให้ความสำคัญกับสุขภาพจิตของสมาชิก ก.อศ. และนิสิตอักษรศาสตร์ทุกคน</li>
        </ul>
        {/* <Link to='/' className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
            <div className="w-full">
                <div className="flex gap-2 items-center mb-7">
                    <img src='/' className="w-6 h-6 rounded-full" />
                    <p className="line-clamp-1">test</p>
                </div>

                <h1 className="blog-title">test</h1>

                <p className="my-3 text-xl font-gelasio leading-7 max-sm:hidden md:max-[1100px]:hidden line-clamp-2">des</p>

            </div>
            
            <div className="h-28 aspect-sqaure bg-grey">
                <img src='/' className="w-full h-full aspect-square object-cover" />
            </div>

        </Link> */}
        <hr className="border-grey my-5"/>
        <p className="text-2xl mx-3 my-3">ดาวน์โหลด</p>
        <ul className="list-disc ml-7">
            <li className="list-outside py-1 text-justify">
                <Link to='/asset' className="hover:underline">เอกสาร/แบบฟอร์ม</Link>
            </li>
            <li className="list-outside py-1 text-justify">
                <Link to='/asset' className="hover:underline">ตราสัญลักษณ์องค์กร</Link>
            </li>            
        </ul>
    </div>
  )
}

export default About