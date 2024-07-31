import { Button, Card, Group, Text } from "@mantine/core";
import { useCartStore } from "@/store";

const CheckoutCard = () => {
  const getCheckoutDetails = useCartStore((state) => state.getCheckoutDetails);
  const { totalItems, totalPrice } = getCheckoutDetails();
  return (
    <Card mt="md" p="xl" radius="md">
      <Text fz="lg" fw={600} mb="xl">
        Checkout Detials
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
    </Card>
  );
};

export default CheckoutCard;
