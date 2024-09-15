"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Orders = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placed order");
    router.push("/");
  };

  return (
    <>
      <h2>Your Orders</h2>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default Orders;
