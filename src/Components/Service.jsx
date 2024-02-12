import { cardData } from "./servicesCardData";

function Services(){
    console.log(cardData)
    return(
        <>
       <div className="w-full flex justify-center">
    
       <div  className="text-black w-[85%]  sm:w-[100%] bg-white flex items-center flex-col shadow-xl  my-6 ">
       <div className="absolute left-12 sm:left-0  text-[250px] sm:text-9xl font-extrabold  text-[#e8e6e6] z-0  "    style={{fontFamily: "Alfa Slab One , serif"}}>O</div>
            <div className ="z-10  relative">
              <h1 className="text-5xl my-6 z-10 sm:text-4xl"
               style={{fontFamily: "Alfa Slab One , serif"}}
              >Our Services</h1>
             <div className=" w-8 h-8 absolute inset-0 rounded-full bg-pink-500 opacity-80 left-60 top-3 sm:left-40">
                <div className="w-3 h-3 rounded-full bg-[#5a1515]"></div>
             </div>

            </div>

            <div className="my-6 text-[gray] z-10 sm:w-4/5 ">
                <p className="z-10">We offer professional web design services at affordable rates to help your business attract more visitors and keep them on your site!</p>
            </div>
            <div className="flex flex-wrap justify-center  z-10  ">

              {cardData.map((value ,index)=>{
                return(
                    <>
                          
                <div className="w-64 flex flex-col items-center border p-6 my-8 mx-8 rounded-md shadow-md md:w-96 sm:p-2 sm:my-4 sm:mx-4" key={index}>
                 <span className="my-3 text-2xl text-[#f3647c] ">
                <i class= {value.icon}></i>
                </span>    
                    <h1 className="my-2 text-xl font-semibold m-2">{value.title}</h1>
                    <p className="text-center my-3 text-[gray] ">{value.discription}</p>
                    <button className="my-4 border border-[#f3647c] px-3 py-2 text-[#f3647c] font-semibold hover:bg-[#f3647c] hover:text-[white] transition duration-300 ease-in-out" >{value.button}</button>
                </div>
                    </>
                )
              })}

                
               
               
               
            </div>
        </div>
       </div>
        </>
    )
}


export default Services;