import React from "react";

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <p>Display all Features</p>
    </div>
  );
};

export default ProductDetailLayout;
