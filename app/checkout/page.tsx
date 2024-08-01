"use client";

import { Table } from "@mantine/core";
import { useCartStore } from "@/store";
import AddressCard from "@/components/AddressCard";
import BankCard from "@/components/BankCard";

const Checkout = () => {
  const { items, checkoutState, getCheckoutDetails } = useCartStore(
    (state) => state
  );
  const { totalItems, totalPrice } = getCheckoutDetails();

  const generateTabelBody = () => {
    {
      return items.map((item) => {
        return (
          <Table.Tr key={item.bookId}>
            <Table.Td>{item.title}</Table.Td>
            <Table.Td>${item.price}</Table.Td>
            <Table.Td>{item.quantity}</Table.Td>
            <Table.Td>${item.price * item.quantity}</Table.Td>
          </Table.Tr>
        );
      });
    }
  };

  const generateTabel = () => {
    return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Book</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Quantity</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {generateTabelBody()}
          <Table.Tr>
            <Table.Td fw={600}>Total</Table.Td>
            <Table.Td></Table.Td>
            <Table.Td fw={600}>{totalItems}</Table.Td>
            <Table.Td fw={600}>${totalPrice}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    );
  };

  const renderCard = () => {
    switch (checkoutState) {
      case "NONE":
        return <AddressCard />;
      case "PENDING":
        return <BankCard />;
    }
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-screen-2xl p-4 gap-6 place-items-baseline">
        {generateTabel()}
        <div className="w-full md:w-[52rem]">{renderCard()}</div>
      </div>
    </main>
  );
};

export default Checkout;
