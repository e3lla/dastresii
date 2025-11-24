// components/ProductCard/ProductCard.jsx
const ProductCard = ({ product }) => {
  if (!product) return null; // اگر product undefined بود، render نکند

  return (
    <a
      href={product.link}
      className="relative flex flex-col justify-between rounded-xl shadow-md bg-white p-3 hover:shadow-lg transition-all duration-200 w-[240px] sm:w-[200px] md:w-[220px] lg:w-[272px] h-auto"
    >
      {/* رنگ‌ها */}
      <div className="absolute left-2 top-2 flex flex-col gap-1">
        {product.colors?.map((color, idx) => (
          <span
            key={idx}
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* تصویر محصول */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl"
      />

      {/* نام محصول */}
      <p className="text-center mt-2 text-sm font-medium text-gray-800">
        {product.name}
      </p>

      {/* قیمت / موجودی */}
      <div className="text-center mt-1 text-base font-bold text-green-600">
        {product.available
          ? `${product.price?.toLocaleString("fa-IR")} تومان`
          : <span className="text-red-500 font-semibold">ناموجود</span>}
      </div>
    </a>
  );
};

export default ProductCard;
