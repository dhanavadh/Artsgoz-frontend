import '../components/homebanner.css';
import { Link } from 'react-router-dom';

function HomeBanner() {
    return (
        <div>
            <div className='flex min-h-screen'>                
                <img src='https://www.arts.chula.ac.th/goz/asset/banner/8dCOiId6lJaxhgVS7UjcEjGy4mpFI4Zg.jpg' className='ssa'></img>
                <div className='flex items-center justify-center'>
                    <div className='grid grid-rows-2 mx-20'>
                        <div>
                            <p className='grid text-[60px] text-[#F8E1EA] font-kanit'> ข้อมูลสำหรับนิสิตใหม่ที่ควรรู้</p>
                        </div>
                        <div className='grid'>
                                <Link to='https://sites.google.com/view/regartscu/' target='_blank' type='button' className='flex px-2 py-2 border-2 border-[#F8E1EA] w-fit h-12 mt-4 text-[#F8E1EA] text-xl underline-thickness-1 hover:underline hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
        `                           cursor-pointer transition-colors duration-300'>
                                    เรียนรู้เพิ่มเติม                         
                                </Link>
                        </div>
                    </div>
                    
                </div>
            </div>            
        </div>
    );
}

export default HomeBanner;