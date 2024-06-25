import Typewriter from 'typewriter-effect';
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
                            <p className='grid text-[60px] text-[#F8E1EA]'> ข้อมูลสำหรับนิสิตใหม่ที่ควรรู้</p>
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
            {/* <div className='grid grid-cols-1'>
                <div className="grid grid-cols-3 min-h-screen">
                    <div className="col-span-3">
                        <img src='https://artsgoz.s3.ap-southeast-1.amazonaws.com/UCAde8wdyS8X5vtWJv7Fh-1719306926369.jpeg' className='ssa'></img>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-rows-1 gap-2 mx-10">
                            <div className="col-span-4">
                                <p className='text-8xl text-[#F8E1EA]'>What is <b>AKSORN</b>?</p>    
                            </div>
                            <div className="col-span-1 ">
                                <div className='flex text-6xl font-semibold mt-2 underline text-[#F8E1EA] mb-0'>
                                        <Typewriter
                                            options={{
                                                strings: ['language?', 'drama?', 'literature?', 'BRK 503?', 'humanities?', 'philosophy?', 'technology?'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                </div>
                            </div>
                            <div className="col-span-4 mt-2">
                                <div type='button' className='flex px-2 py-1 border-2 border-[#F8E1EA] w-fit h-auto mt-2 text-[#F8E1EA] underline-thickness-1 hover:underline hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
        `                           cursor-pointer transition-colors duration-300'>
                                    เรียนรู้เพิ่มเติม                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div> */}
        </div>
    );
}

export default HomeBanner;