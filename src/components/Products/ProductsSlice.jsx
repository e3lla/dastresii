import { createSlice } from "@reduxjs/toolkit";
import Image1 from "../../Images/bl.jpg"
import Image2 from "../../Images/dor.jpg"

const initialState = [
  {
    title: "هندزفری بلوتوثی دورگردنی مک دودو مدل Mcdodo HP-0210",
    img: Image1,
    priceBefore: 2090000,
    discount: 400000,
    priceNow: 1690000,
    link: "/product/Mcdodo-0210",
  },
  {
    title: "هندزفری بلوتوثی k20i انکر مدل Anker A3994",
    img: Image2,
    priceBefore: 1200000,
    discount: 301000,
    priceNow: 899000,
    link: "/product/Anker-A3994",
  },
];

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectProducts = (state) => state.products;

export default ProductsSlice.reducer;
