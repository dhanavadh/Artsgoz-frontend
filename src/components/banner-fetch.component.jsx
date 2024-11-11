/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Banner = ({ content }) => {

    let { title, des, banner, blog_id: id } = content;


    return ( 
        <div className="mx-5 my-3">
            <div>
                <div className='flex max-h-3/4 relative'>
                    <img src={banner} className='rounded-xl h-full absolute object-cover -z-[1] brightness-50'></img>                        
                    <div className='grid grid-rows mx-10 mt-24 md:mt-32'>
                        <p className='grid text-[30px] sm:text-[40px] text-[#F8E1EA] font-kanit'>{title}</p>
                        <p className='grid text-[20px] sm:text-[20px] text-[#F8E1EA] font-normal'>{des}</p>
                        <div className='grid mb-10'>
                                <Link to={`/blog/${id}`} target='_blank' type='button' className='flex px-2 py-2 border-2 rounded-lg border-[#F8E1EA] w-fit h-12 mt-4 text-[#F8E1EA] text-xl underline-thickness-1 hover:underline hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
        `                           cursor-pointer transition-colors duration-300'>
                                    อ่านต่อได้ที่นี่                      
                                </Link>
                        </div>
                    </div>                    
                </div>                                   
            </div>
        </div>
    )
}

export default Banner;