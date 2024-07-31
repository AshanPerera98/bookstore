"use client";

import { Badge, Button, Card, CardSection, Group, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

import { Book } from "@/interfaces/Book";

const BookCard = (props: Book) => {
  const { id, image, title, author, price, published, description, category } =
    props;
  return (
    <Card w={360} shadow="sm" radius="md" withBorder>
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
        <Badge size="sm" variant="light" mt={12}>
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

          <Button radius="md" style={{ flex: 1 }}>
            Add to cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default BookCard;
