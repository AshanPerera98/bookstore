"use client";

import CartCard from "@/components/CartCard";
import React from "react";
import { useCartStore } from "@/store";
import { Text } from "@mantine/core";
import CheckoutCard from "@/components/CheckoutCard";
import Image from "next/image";

const Cart = () => {
  const { items, totalItems } = useCartStore((state) => state);

  const renderEmptyBanner = () => {
    return (
      <div className="w-full md:w-4/5 h-[36rem] flex flex-col justify-evenly items-center">
        <div className="flex flex-col items-center">
          <Text fz="xl" fw={600} mb="md">
            Oops! No items in the cart
          </Text>
          <Text fz="xs" c="dimmed">
            Please add books t the cart and come back to proceed
          </Text>
        </div>
        <Image
          src="/undraw_empty_cart.svg"
          alt="Empty cart"
          width={300}
          height={300}
        />
      </div>
    );
  };

  const renderCart = () => {
    return (
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
    );
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-screen-2xl p-4 gap-6">
        {totalItems > 0 ? renderCart() : renderEmptyBanner()}
        <div className="w-full md:w-96 w-80">
          <CheckoutCard />
        </div>
      </div>
    </main>
  );
};

export default Cart;
