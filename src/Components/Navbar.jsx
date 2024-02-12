


function Navbar(){

   



    return(
       
        <div>
            <div className=" absolute z-10  border-b border-gray flex justify-between items-center flex-wrap  w-full py-3 lg:w-full xl:w-full md:w-full  md:justify-around lg:justify-around xl:justify-around   lg:py-6  "  >
                
                <div>
                    <h1 className="text-3xl bold  " 
                    style={{fontFamily: "Alfa Slab One , serif"}}>wcore</h1>
                </div>

                <div className="lg:flex xl:flex md:flex hidden  justify-around items-center  " 
                style={{fontFamily: "Alfa Slab One , serif"}}>

                    <span className="phone-Icon pr-2 text-xl text-[#e8e7e7]">
                    <i class="fa-solid fa-phone-volume"></i></span>
                    <p className="text-xl">+9 888 99 99 888</p>
                </div>
                
                <div className="lg:hidden md:hidden xl:hidden" >   <i className="fa-solid fa-phone-volume text-2xl text-[green] border-2 border-green-800 w-12 h-12 text-center pt-2 rounded-full fixed right-[10%] top-1/2 " ></i></div>

                <div className="">
                    <button className="border border-white p-2  text-sm  lg:px-6 xl:px-6 md:px-6 font-bold 
                    hover:bg-white hover:text-[#ec3d3d]"> 
                    REQUEST A QUOTE
                    </button>
                </div>
            </div>

              <div>
        
              </div>
              </div>
        
     
    )
}

export default Navbar;