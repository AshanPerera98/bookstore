import {
  ActionIcon,
  Badge,
  Button,
  Card,
  CardSection,
  Group,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";
import { useCartStore } from "@/store";

import { Book } from "@/interfaces";

const BookCard = (props: Book) => {
  const { id, image, title, author, price, published, description, category } =
    props;
  const { addItem, checkItemInCart } = useCartStore((state) => state);

  const clickAddToCart = () => {
    addItem({ bookId: id, title, author, price, quantity: 1 });
  };

  const renderMobileBookCard = () => {
    return (
      <Card shadow="sm" radius="md" hiddenFrom="sm">
        <Card.Section>
          <div className="flex">
            <Image alt={title} src={image} width={150} height={150} />
            <div className="w-full py-2 px-4">
              <Text fz="lg" fw={600}>
                {title}
              </Text>
              <Text size="sm" c="dimmed">
                {author}
              </Text>
              <div className="flex flex-row justify-between items-center w-full mt-4">
                <Badge size="sm" variant="light" color="indigo">
                  {category}
                </Badge>
                <Text fz="xs">{published}</Text>
              </div>
            </div>
          </div>
        </Card.Section>
        <Card.Section>
          <Text fz="sm" mx={16} my={12}>
            {description}
          </Text>
        </Card.Section>
        <hr />
        <Card.Section>
          <div className="flex flex-row justify-between items-center m-4">
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {`$${price}`}
            </Text>
            <ActionIcon
              variant="gradient"
              size="xl"
              aria-label="Gradient action icon"
              gradient={{ from: "red", to: "pink", deg: 145 }}
              onClick={clickAddToCart}
              disabled={checkItemInCart(id)}
            >
              <FaCartPlus />
            </ActionIcon>
          </div>
        </Card.Section>
      </Card>
    );
  };

  return (
    <>
      {renderMobileBookCard()}
      <Card maw={360} miw={240} shadow="sm" radius="md" visibleFrom="sm">
        <CardSection>
          <Image alt={title} src={image} width={400} height={300} />
        </CardSection>
        <Card.Section mt="md" px={20}>
          <Group justify="space-between">
            <Text fz="lg" fw={600}>
              {title}
            </Text>
            <Text fz="xs">{published}</Text>
          </Group>
          <Text size="sm" c="dimmed">
            {author}
          </Text>
          <Badge size="sm" variant="light" color="indigo" mt={12}>
            {category}
          </Badge>
          <Text fz="sm" mt={16}>
            {description}
          </Text>
        </Card.Section>
        <Card.Section p={20}>
          <Group gap={30}>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {`$${price}`}
            </Text>

            <Button
              style={{ flex: 1 }}
              onClick={clickAddToCart}
              disabled={checkItemInCart(id)}
              variant="gradient"
              radius="md"
              gradient={{ from: "indigo", to: "violet", deg: 145 }}
            >
              Add to cart
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </>
  );
};

export default BookCard;
