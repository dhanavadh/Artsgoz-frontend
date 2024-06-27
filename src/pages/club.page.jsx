import { Link } from "react-router-dom"
import aksara from "../imgs/clubs/aksara.jpg"
import aksornSan from "../imgs/clubs/aksorn-san.jpg"
import aksornSara from "../imgs/clubs/aksorn-sara.jpg"
import artsRumthai from "../imgs/clubs/arts_rumthai.jpg"
import artsband from "../imgs/clubs/artsbandofficial.jpg"
import artsdebate from "../imgs/clubs/artsdebate.jpg"
import artsstreet from "../imgs/clubs/artsstreetofficial.jpg"
import artsting from "../imgs/clubs/artstingofficial.jpg"
import leelart from "../imgs/clubs/leelartaksorncu.jpg"
import musicaltheatre from "../imgs/clubs/musicaltheatre-artscu.jpg"

const Club = () => {
  return (
    <div>
        <p className="text-3xl font-medium mb-3">ช่องทางการติดต่อชมรม</p>
            <hr className="my-5 border-grey" />
            <Link to='https://www.instagram.com/aksaravathit' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">อักษราวาทิต</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">Thai Traditional Music Club
                    Faculty of Arts, Chulalongkorn University</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @aksaravathit</p>

                </div>
                
                <div className="h-28">
                    <img src={aksara} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/arts_rumthai' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">นาฏศิลป์</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">ชมรมนาฏศิลป์ คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @arts_rumthai</p>

                </div>
                
                <div className="h-28">
                    <img src={artsRumthai} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/leelartaksorncu' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">ลีลาศ</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">🕺ARTS CU DANCESPORT CLUB💃
                    ชมรมลีลาศ คณะอักษรศาสตร์ จุฬาฯ 🩶🦚
                    #leelartaksorn</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @leelartaksorncu</p>

                </div>
                
                <div className="h-28">
                    <img src={leelart} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/artsstreetofficial' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">Arts Street</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">CU ARTS STREET DANCE CLUB💥</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @artsstreetofficial</p>

                </div>
                
                <div className="h-28">
                    <img src={artsstreet} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/artstingofficial' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">Artsting</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">A dance cover club founded by Arts students of Chulalongkorn university</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @artstingofficial</p>

                </div>
                
                <div className="h-28">
                    <img src={artsting} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/artsbandofficial' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">Artsband</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">Western Music Club, the Faculty of Arts, Chulalongkorn University</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @artsbandofficial</p>

                </div>
                
                <div className="h-28">
                    <img src={artsband} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/aksorn.sara' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">สาราณียกร</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">Saraneeyakorn Club, Faculty of Arts, Chula
                    ชมรมสาราณียกร คณะอักษรศาสตร์ จุฬาฯ</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @aksorn.sara</p>

                </div>
                
                <div className="h-28">
                    <img src={aksornSara} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/artsdebate' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">โต้วาที</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">ชมรมโต้วาที คณะอักษรศาสตร์ 🦚✨
                    จุฬาลงกรณ์มหาวิทยาลัย</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @artsdebate</p>

                </div>
                
                <div className="h-28">
                    <img src={artsdebate} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/musicaltheatre.artscu' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">ศิลปการละคร (มิวสิคัล)</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">• 𝐂𝐡𝐮𝐥𝐚𝐥𝐨𝐧𝐠𝐤𝐨𝐫𝐧 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 - 𝐀𝐫𝐭𝐬 𝐌𝐮𝐬𝐢𝐜𝐚𝐥 & 𝐓𝐡𝐞𝐚𝐭𝐫𝐞 𝐂𝐥𝐮𝐛 🎭
                    🧡 𝕆𝕗𝕗𝕚𝕔𝕚𝕒𝕝 ℂ𝕝𝕦𝕓 💛</p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @musicaltheatre.artscu</p>

                </div>
                
                <div className="h-28">
                    <img src={musicaltheatre} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
            <Link to='https://www.instagram.com/aksorn.san' target="_blank" className="flex gap-8 items-center border-b border-grey pb-5 mb-4">
                <div className="w-full">

                    <h1 className="blog-title">สันทนาการ</h1>

                    <p className="my-3 text-xl font-gelasio leading-7 line-clamp-2">กองสันอักษร🦚
                        ชมรมสันทนาการ
                        คณะอักษรศาสตร์ จุฬาฯ
                    </p>
                    <p className="hover:underline text-xl font-gelasio leading-7 line-clamp-2">Instagram: @aksorn.san</p>

                </div>
                
                <div className="h-28">
                    <img src={aksornSan} className="w-full h-full aspect-square rounded-full object-cover" />
                </div>

            </Link>
    </div>
  )
}

export default Club