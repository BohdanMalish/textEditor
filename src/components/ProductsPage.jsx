import React from "react";
import "../components/ProductCard.css";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const lst = [1, 2, 3, 2, 5, 6];
  return (
    <div className="ProductPage">
      {lst.map((e) => (
        <ProductCard></ProductCard>
      ))}
    </div>
  );
};
export default ProductPage;
