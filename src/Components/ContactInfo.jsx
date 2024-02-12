
import mac2 from '../Images/mac2.png'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
function ContactInfo(){
    gsap.registerPlugin(ScrollTrigger);
   
    useEffect(()=>{
        gsap.from(".mac-2",{
            scale: 0,
            duration:1,
            scrollTrigger:{
                 trigger: ".contact-div",
                 start: "top center",
                 end: "bottom center",


            }
        })
    },[])





    return(
        <>
        <div className='contact-div my-16 flex items-center justify-around  bg-[#e9e7e7] h-80 sm:my-8 ' >
            <div className='m-6'>
                <h1 className='text-5xl my-3 sm:text-2xl'  style={{fontFamily: "Alfa Slab One , serif"}}>Schedule a free consultation</h1>
                <p>With a full team of marketing experts at your disposal, anything is possible</p>
                <button className=' border border-white bg-[#f3647c] text-white px-6 py-3 mt-6 hover:bg-white hover:text-[#f3647c] hover:border-[#f3647c] font-bold'>Contact us</button>
            </div>
            <div>
              <img src={mac2} alt="mac2" className='mac-2 sm:hidden' />
            </div>
        </div>
        </>
    )
}
export default ContactInfo