import { Button, Card } from "@mantine/core";

const PlaceOrderCard = () => {
  return (
    <Card shadow="sm" radius="md" padding="xl" visibleFrom="sm">
      <Button type="submit" mt="lg" fullWidth loading={isSubmitting}>
        Continue
      </Button>
    </Card>
  );
};

export default PlaceOrderCard;
