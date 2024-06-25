import './Error.css'
import Link from 'next/link';


function NotFound() {
    return (
        <div>
            <div className='grid bg-[#1f1f1f] text-[#f8e1ea] min-h-screen items-center justify-center'>
              <div className='grid '>
                <div className='grid text-6xl items-center justify-center mb-4'>
                  ขออภัย
                </div>
                <div className='grid text-xl items-center justify-center mb-2'>
                  ไม่พบหน้าที่คุณกำลังตามหา หรือ หน้าที่คุณกำลังตามหาอาจกำลังปรับปรุงอยู่
                </div>
                <div className='grid text-xl items-center justify-center'>
                  <Link href='/' className='underline'>กลับหน้าแรก</Link>
                </div>
              </div>
            </div>
            {/* <div className='App-header2'>
                <p className='text-7xl m-5'>
                เรากำลังปรับปรุงหน้านี้อยู่
                </p>
                <p className='text-xl'>ไม่พบหน้าที่คุณกำลังตามหา หรือ คุณอาจไม่มีสิทธิเข้าถึงหน้านี้</p>
                <a type='button' className='flex px-2 py-1 mt-4 w-fit h-auto text-xl text-[#F8E1EA] underline-thickness-1 hover:underline cursor-pointer' href='/'>
                                    <div >กลับหน้าแรก</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                </a>
            </div> */}
        </div>
    );
}

export default NotFound;