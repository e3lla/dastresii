import { useSelector } from "react-redux";
import { selectProducts } from "../Products/ProductsSlice";

const Products = () => {
  const products = useSelector(selectProducts); 

  return (
    <div className="mt-8 flex flex-wrap gap-6  justify-start">
      {Array.isArray(products) && products.map((product) => (
        <div 
          key={product.link}
          className="
            bg-white rounded-xl shadow flex flex-col items-center p-4
            transition-all
            h-[530px] w-[366px]

            xl:h-[567px] xl:w-[366px]
            lg:h-[480px] lg:w-[330px]
            md:h-[430px] md:w-[300px]
            sm:h-[380px] sm:w-[260px]
            xs:h-[340px] xs:w-[230px]
          "
        >
          <img 
            src={product.img} 
            alt={product.title} 
            className="
              object-contain mx-auto
              w-[333px] h-[333px]

              xl:w-[333px] xl:h-[333px]
              lg:w-[300px] lg:h-[300px]
              md:w-[260px] md:h-[260px]
              sm:w-[220px] sm:h-[220px]
              xs:w-[190px] xs:h-[190px]
            " 
          />

          <h3 className="
            font-medium text-center text-gray-800 leading-6 my-4
            text-md
            lg:text-sm
            md:text-sm
            sm:text-xs
            xs:text-[11px]
          ">
            {product.title}
          </h3>

          <div className="flex flex-col gap-2 w-full mt-auto">
            <div className="flex justify-between">
              <span className="
                line-through text-gray-500
                text-sm lg:text-xs md:text-xs sm:text-[11px] xs:text-[10px]
              ">
                {product.priceBefore.toLocaleString("fa-IR")}
              </span>

              <span className="
                text-red-500 font-medium
                text-sm lg:text-xs md:text-xs sm:text-[11px] xs:text-[10px]
              ">
                {product.discount.toLocaleString("fa-IR")} تومان تخفیف
              </span>
            </div>

            <div className="flex justify-end gap-1">
              <span className="
                text-green-600 font-bold
                text-xl lg:text-lg md:text-base sm:text-sm xs:text-[13px]
              ">
                {product.priceNow.toLocaleString("fa-IR")}
              </span>

              <span className="text-gray-600 
                text-xs lg:text-[11px] md:text-[10px] sm:text-[9px] xs:text-[8px]
              ">
                تومان
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
