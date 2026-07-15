"use client";
import { useState } from "react";
import BISCRSProductList from "./BISCRSProductList";
import BISCRSProductModal from "./BISCRSProductModal";

export default function BISCRSOverview() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <>
      <BISCRSProductList onProductClick={setSelectedProduct} />
      {selectedProduct && (
        <BISCRSProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
