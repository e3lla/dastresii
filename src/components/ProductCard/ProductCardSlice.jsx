// ProductCardSlice.jsx
import { createSlice } from "@reduxjs/toolkit";
import Image6 from "../../Images/SE3338-11.jpg";

const initialState = {
  products: [
    {
      id: 1,
      name: "محصول ۱",
      link: "/product/1",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 2,
      name: "محصول ۱",
      link: "/product/2",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 3,
      name: "محصول ۱",
      link: "/product/3",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 4,
      name: "محصول ۱",
      link: "/product/4",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 5,
      name: "محصول ۱",
      link: "/product/5",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 6,
      name: "محصول ۱",
      link: "/product/6",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 7,
      name: "محصول ۱",
      link: "/product/7",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 8,
      name: "محصول ۱",
      link: "/product/8",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 9,
      name: "محصول ۱",
      link: "/product/9",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
     {
      id: 10,
      name: "محصول ۱",
      link: "/product/10",
      colors: ["#000", "#444"],
      image: Image6,
      price: 10000,
      available: true,
    },
    // محصولات بیشتر
  ],
};

const productCardSlice = createSlice({
  name: "productCard",
  initialState,
  reducers: {
    addProduct: (state, action) => state.products.push(action.payload),
    removeProduct: (state, action) =>
      (state.products = state.products.filter((p) => p.id !== action.payload)),
  },
});

// ← این نام export باید همان چیزی باشد که در Slider2.jsx import می‌کنی
export const selectSliderProducts = (state) => state.productCard.products;

export default productCardSlice.reducer;
