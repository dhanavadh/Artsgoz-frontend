import { Link } from 'react-router-dom';
import frame4 from '../imgs/frame4_ad.png';

const Ads = () => {
  return (
    <div>
        <div className=''>
                <div className='flex max-h-96 relative'>
                    <img src={frame4} className='rounded-xl h-96 absolute object-cover -z-[1] brightness-50'></img>                        
                        <div className='grid grid-rows mx-8 mt-32'>
                            <p className='grid text-[26px] lg:text-[32px] text-[#F8E1EA] font-kanit'>We are looking for Developers! <br /> Join us?</p>
                            <div className='grid'>
                                    <Link to='https://github.com/artsgoz' target='_blank' type='button' className='flex px-2 py-2 border-2 rounded-lg border-[#F8E1EA] w-fit h-12 mt-4 text-[#F8E1EA] text-xl hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
            `                           cursor-pointer transition-colors duration-300'>
                                        <i className="fi fi-brands-github "></i>&nbsp; GitHub
                                    </Link>
                            </div>
                        </div>                    
                </div>
            </div>
    </div>
  )
}

export default Ads