import { Button, Card, Group, Text } from "@mantine/core";
import { IoBagCheckOutline } from "react-icons/io5";

import { useCartStore } from "@/store";
import Link from "next/link";

const CheckoutCard = () => {
  const getCheckoutDetails = useCartStore((state) => state.getCheckoutDetails);
  const { totalItems, totalPrice } = getCheckoutDetails();
  return (
    <Card mt="md" p="xl" radius="lg">
      <Text fz="lg" fw={600} mb="xl">
        Order Detials
      </Text>
      <hr />
      <Group justify="space-between" py="sm">
        <Text>Total items</Text>
        <Text fw={600}>{totalItems}</Text>
      </Group>
      <hr />
      <Group justify="space-between" py="sm">
        <Text>Total price</Text>
        <Text fw={600}> ${totalPrice}</Text>
      </Group>
      <Link href="/checkout" className="w-full">
        <Button
          mt="lg"
          radius="md"
          variant="gradient"
          gradient={{ from: "indigo", to: "violet", deg: 145 }}
          rightSection={<IoBagCheckOutline size={14} />}
          disabled={totalItems === 0}
          fullWidth
        >
          Checkout
        </Button>
      </Link>
    </Card>
  );
};

export default CheckoutCard;
