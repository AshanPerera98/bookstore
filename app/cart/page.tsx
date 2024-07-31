"use client";

import CartCard from "@/components/CartCard";
import React from "react";
import { useCartStore } from "@/store";
import { Text } from "@mantine/core";
import CheckoutCard from "@/components/CheckoutCard";

const Cart = () => {
  const items = useCartStore((state) => state.items);
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-screen-2xl p-4 gap-6">
        <div className="grow grid gap-4">
          <div className="grid grid-cols-12 gap-2 md:px-6 mantine-visible-from-sm">
            <div className="col-span-4">
              <Text fz="lg" fw={600}>
                Book
              </Text>
            </div>
            <div className="col-span-2 mx-auto">
              <Text fz="lg" fw={600}>
                Unit price
              </Text>
            </div>
            <div className="col-span-3 mx-auto">
              <Text mx={8} fz="lg" fw={600}>
                Quantity
              </Text>
            </div>
            <div className="col-span-2 mx-auto">
              <Text fz="lg" fw={600}>
                Net price
              </Text>
            </div>
            <div className="col-span-1 ml-auto mr-0">
              <Text fz="lg" fw={600}>
                Remove
              </Text>
            </div>
          </div>
          {items.map((item) => (
            <CartCard key={item.bookId} {...item} />
          ))}
        </div>
        <div className="lg:w-96 w-80">
          <CheckoutCard />
        </div>
      </div>
    </main>
  );
};

export default Cart;
