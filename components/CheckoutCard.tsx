import { Button, Card, Group, Text } from "@mantine/core";
import { IoBagCheckOutline } from "react-icons/io5";

import { useCartStore } from "@/store";
import { useRouter } from "next/navigation";

const CheckoutCard = () => {
  const router = useRouter();
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
      <Button
        mt="lg"
        radius="md"
        variant="gradient"
        gradient={{ from: "indigo", to: "violet", deg: 145 }}
        rightSection={<IoBagCheckOutline size={14} />}
        disabled={totalItems === 0}
        onClick={(e) => {
          router.push("/checkout");
        }}
        fullWidth
      >
        Checkout
      </Button>
    </Card>
  );
};

export default CheckoutCard;
