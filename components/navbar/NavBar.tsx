"use client";

import { Group, Text, Box, Avatar, Indicator, ActionIcon } from "@mantine/core";
import classes from "./NavBar.module.css";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

import { useCartStore } from "@/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const router = useRouter();

  return (
    <div
      className="bg-white
     drop-shadow-sm shadow-gray-50"
    >
      <Box p={16} className="flex justify-center">
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <ActionIcon
              variant="default"
              size="lg"
              aria-label="Back to dashboard"
              hiddenFrom="xs"
              onClick={(e) => router.push("/")}
            >
              <FaArrowLeft />
            </ActionIcon>

            <Link href={"/"}>
              <Text fz={"h3"} fw={600}>
                BookStore
              </Text>
            </Link>

            <Group h="100%" gap={0} visibleFrom="xs">
              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/cart" className={classes.link}>
                Cart
              </Link>
            </Group>

            <Group>
              <Link href="/cart">
                <Indicator color="indigo" inline label={totalItems} size={16}>
                  <Avatar color="indigo" radius="sm">
                    <FaShoppingCart size="1.5rem" />
                  </Avatar>
                </Indicator>
              </Link>
            </Group>
          </Group>
        </header>
      </Box>
    </div>
  );
};

export default NavBar;
