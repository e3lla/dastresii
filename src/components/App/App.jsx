import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home'

const App = () => {
   return ( 
      <>
      <Header/>
      <div className="2xl:pt-[13%] xl:pt-[14%] lg:pt-[17%] md:pt-[12%] sm:pt-[18%] pt-[22%]">
      <Home/>
      <Footer/>
      </div>
      </>
   );
}
 
export default App;



{/**import ProductCard from "../Products/ProductsCard"; // مسیر صحیح به ProductCard
import { products } from "../Products/ProductsData"; // مسیر صحیح به ProductsData

const Bigone = () => (
  <div className="mt-[30px] flex gap-6 justify-center flex-wrap">
    {products.map((item) => (
      <ProductCard key={item.title} product={item} />
    ))}
  </div>
);

export default Bigone;
 */}
