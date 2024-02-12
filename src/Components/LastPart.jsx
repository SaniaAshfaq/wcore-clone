import laptopImg from '../Images/laptopImg.jpg'
import computer from '../Images/computer.png'
import landing from '../Images/landing-page12.png'
import shopping from '..//Images/online-shop.png'
import quality from '../Images/quality.png'
import lastbg from '../Images/Lastbg.png'
function LastPart(){
    return(
        <>
        <div>
        <div className='flex flex-col relative'>
            <div  className='h-60'
            
            style={{backgroundImage: `url(${laptopImg})` }}></div>
            <div className='flex flex-col items-center w-4/5 absolute bg-[white] top-40 left-32 py-10 shadow-md pb-16 sm:w-full sm:static  md:static md:w-full '>
            <div className='flex flex-col items-center'>
            <div className ="z-10  relative  ">
              <h1 className="text-5xl my-6 z-10 sm:text-2xl "
               style={{fontFamily: "Alfa Slab One , serif"}}
              >How much does it cost?</h1>
             <div className=" w-8 h-8 absolute  inset-0 rounded-full bg-pink-500 opacity-80 left-60 top-3 sm:left-40">
                <div className="w-3 h-3 rounded-full bg-[#5a1515]"></div>
             </div>

            </div>

            <div className="my-6 text-[gray] z-10 sm:w-4/5 ">
                <p className="z-10">Need a quick answer when it comes to website costs for your business? View the average</p>
            </div>
            </div>
             <div className='flex justify-around sm:flex-col md:flex-col'>
               <LastCards img ={landing} name = "Landing page Development" quan="1 web page" price ="$500-%1000"/>
               <LastCards img ={computer} name = "Small Bussiness website" quan="8-16 web pages" price ="$1500-%3000"/>
               <LastCards img ={quality} name = "Corporate Website" quan="25 to 75 web page" price ="$4000-%6000"/>
               <LastCards img ={shopping} name = "eCommerce Website" quan="100 to 1000 web page" price ="$5000-%10000"/>
               
             </div>
             </div>

        </div>
        </div>
             {/* adding space beside the div in lg and xl devices */}
        <div className=' xl:h-[500px] lg:h-[500] bg-white'></div>
             {/* adding bg image behind the last element */}
        <div className='h-80 sm:h-60 md:h-60 pt-12 sm:pt-2 md:pt-4 '
        style={{backgroundImage : `linear-gradient(to right, rgb(194, 62, 126), rgb(255, 165, 80)), url(${lastbg})`}}>
             <div className='m-6'>
                <h1 className='text-5xl my-3 sm:text-2xl text-[white]'  style={{fontFamily: "Alfa Slab One , serif"}}>Send request and get prototype</h1>
                <p className='text-[white]'>With a full team of marketing experts at your disposal, anything is possible</p>
                <button className=' border border-white bg-[#f3647c] text-white px-6 py-3 mt-6 hover:bg-white hover:text-[#f3647c] hover:border-[#f3647c] font-bold'>Contact us</button>
            </div>
        </div>
        
        </>
    )
}

function LastCards(props){
    return(
        <>
           <div className='flex flex-col items-center p-6 '>
           <div>
           <img src={props.img} alt="computer" className='h-12 my-3'  />
           </div>
            <h1 className='font-bold my-2'>{props.name}</h1>
            <p className='my-2'>{props.quan}</p>
            <p className='text-[#f3647c] font-bold'>{props.price}</p>
           </div>
        </>
    )

}
export default LastPart;