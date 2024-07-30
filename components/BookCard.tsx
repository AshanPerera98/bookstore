"use client";

import { Badge, Button, Card, CardSection, Group, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

import { Book } from "@/interfaces/Book";

const BookCard = (props: Book) => {
  const { id, image, title, author, price, published, description } = props;
  return (
    <Card w={360} shadow="sm" radius="md" withBorder>
      <CardSection>
        <Image alt={title} src={image} width={400} height={300} />
      </CardSection>
      <Card.Section mt="md" px={20}>
        <Text fz="lg" fw={500}>
          {title}
        </Text>
        <Badge size="sm" variant="light">
          {author}
        </Badge>
        <Text fz="xs" c="dimmed" mt={5}>
          {`published : ${published}`}
        </Text>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>
      <Card.Section p={20}>
        <Group gap={30}>
          <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
            {`$${price}`}
          </Text>

          <Button radius="xl" style={{ flex: 1 }}>
            Add to cart
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default BookCard;
