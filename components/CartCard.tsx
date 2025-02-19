import { StoredBook } from "@/interfaces";
import { ActionIcon, Button, Card, Group, Modal, Text } from "@mantine/core";
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";

import { useCartStore } from "@/store";
import { useDisclosure } from "@mantine/hooks";

const CartCard = (props: StoredBook) => {
  const { bookId, title, author, price, quantity } = props;
  const { incrementQuantity, removeItem } = useCartStore((state) => state);
  const [opened, { open, close }] = useDisclosure(false);

  const renderModal = () => {
    return (
      <Modal opened={opened} onClose={close} centered radius="lg">
        <Card>
          <Card.Section p="md">
            <Text>Are you sure you want to remove this book from cart?</Text>
          </Card.Section>
          <Card.Section
            p="md"
            mx={0}
            mb={12}
            className="bg-slate-50 rounded-lg shadow-lg"
          >
            <Text fz="lg" fw={600}>
              {title}
            </Text>
            <Text size="sm" c="dimmed">
              {author}
            </Text>
          </Card.Section>
          <Card.Section p="md">
            <Button
              fullWidth
              variant="gradient"
              gradient={{ from: "red", to: "pink", deg: 145 }}
              rightSection={<FiTrash size={14} />}
              onClick={(e) => {
                removeItem(bookId);
              }}
            >
              Remove
            </Button>
          </Card.Section>
        </Card>
      </Modal>
    );
  };

  const renderCard = () => {
    return (
      <Card shadow="sm" radius="md" padding="lg" visibleFrom="sm">
        <div className="grid grid-cols-12 gap-2 md:px-2">
          <div className="col-span-4">
            <Text fz="lg" fw={600}>
              {title}
            </Text>
            <Text size="sm" c="dimmed">
              {author}
            </Text>
          </div>
          <Group className="col-span-2 mx-auto">
            <Text fz="lg" fw={600}>
              ${price}
            </Text>
          </Group>
          <Group className="col-span-3 mx-auto">
            <ActionIcon
              size={28}
              variant="light"
              aria-label="Decrease quantity of the item"
              onClick={(e) => incrementQuantity(bookId, false)}
              disabled={quantity === 1}
            >
              <FiMinus />
            </ActionIcon>
            <Text mx={8} fz="lg" fw={600}>
              {quantity}
            </Text>
            <ActionIcon
              size={28}
              variant="light"
              aria-label="Increase quantity of the item"
              onClick={(e) => incrementQuantity(bookId, true)}
            >
              <FiPlus />
            </ActionIcon>
          </Group>
          <Group className="col-span-2 mx-auto">
            <Text fz="lg" fw={600}>
              ${price * quantity}
            </Text>
          </Group>
          <Group className="col-span-1 ml-auto mr-0">
            <ActionIcon
              variant="gradient"
              size="xl"
              aria-label="Gradient action icon"
              gradient={{ from: "red", to: "pink", deg: 145 }}
              onClick={open}
            >
              <FiTrash />
            </ActionIcon>
          </Group>
        </div>
      </Card>
    );
  };

  const renderMobileCard = () => {
    return (
      <Card shadow="sm" radius="md" padding="xl" hiddenFrom="sm">
        <Card.Section p="md">
          <Group justify="space-between" align="start">
            <div>
              <Text fz="lg" fw={600}>
                {title}
              </Text>
              <Text size="sm" c="dimmed">
                {author}
              </Text>
            </div>
            <Text fz="xl" fw={700} mt={12}>
              ${price}
            </Text>
          </Group>
        </Card.Section>
        <hr />
        <Card.Section p="md">
          <Group justify="space-between">
            <Group>
              <Text size="sm" c="dimmed">
                Quantity :
              </Text>
              <Text fz="lg" fw={600}>
                {quantity}
              </Text>
            </Group>
            <Group>
              <ActionIcon
                size={28}
                variant="light"
                aria-label="Decrease quantity of the item"
                onClick={(e) => incrementQuantity(bookId, false)}
                disabled={quantity === 1}
              >
                <FiMinus />
              </ActionIcon>
              <ActionIcon
                size={28}
                variant="light"
                aria-label="Increase quantity of the item"
                onClick={(e) => incrementQuantity(bookId, true)}
              >
                <FiPlus />
              </ActionIcon>
            </Group>
          </Group>
        </Card.Section>
        <Card.Section p="md">
          <div className="flex justify-between items-center gap-4">
            <Text fz="xl" fw={700} mt={12}>
              ${price * quantity}
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: "red", to: "pink", deg: 145 }}
              rightSection={<FiTrash size={14} />}
              onClick={open}
            >
              Remove
            </Button>
          </div>
        </Card.Section>
      </Card>
    );
  };

  return (
    <div>
      {renderModal()}
      {renderCard()}
      {renderMobileCard()}
    </div>
  );
};

export default CartCard;
