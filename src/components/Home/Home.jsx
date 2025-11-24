import CountDown from "../CountDown/CountDown";
import Divider from "../Divider/Divider";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import ListProducts from "../ListProducts/ListProducts";
import SecondSlider from "../SecondSlider/SecondSlider";
import Slider2 from "../ProductCard/Slider2";

const Home = () => {
    return (
     <>
       <div className=" bg-fuchsia-500 w-[86%] h-[100%] mx-auto px-4">
         <Slider />
           <div className="card w-full  bg-cyan-300 rounded-box  h-[50px]  place-items-end mt-[30px]">
            <div className="flex justify-between w-[100%] px-[5%]"> 
              <div className="flex items-center gap-2 xl:text-4xl lg:text-3xl md:text-2xl sm:text-[19px] ">
                        <svg  fill="#FE5F55" width="30px" height="30px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#FE5F55">

<g id="SVGRepo_bgCarrier" strokewidth="0"/>

<g id="SVGRepo_tracerCarrier" strokelinecap="round" strokelinejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z"/>

</g>

</svg>
<span className="">
تخفیف‌های روزانه دسترسی</span>
            </div>
          <div className="hidden sm:flex items-center gap-2 text-2xl">
  <CountDown />
</div>
            </div>
           </div>

         <div className="w-[100%] h-[639px] bg-amber-300 hidden pr-[5%] 2xl:flex xl:flex lg:flex">
            
            <Products/>  
           <Divider />
         </div>
         <div className="w-[100%] justify-center sm:h-[1310px] md:h-[710px]  bg-lime-400 2xl:hidden xl:hidden lg:hidden md:flex sm:flex">
          <ListProducts/>
         </div>
         <div>
        <SecondSlider/>
         </div>
         <div className="w-[100%] mx-auto bg-amber-500">
<Slider2/>
    </div>
             <div className="w-[100%] mx-auto my-10 bg-amber-500">
<Slider2/>
    </div>
       </div>
     </>
    );
}

export default Home;
