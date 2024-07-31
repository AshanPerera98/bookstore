"use client";

import {
  Group,
  Button,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Avatar,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./NavBar.module.css";
import { FaShoppingCart } from "react-icons/fa";

import { useCartStore } from "@/store";
import Link from "next/link";

const NavBar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <div
      className="bg-white
     drop-shadow-sm shadow-gray-50"
    >
      <Box p={16} className="flex justify-center">
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Text fz={"h3"} fw={600}>
              BookStore
            </Text>

            <Group h="100%" gap={0} visibleFrom="sm">
              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/cart" className={classes.link}>
                Cart
              </Link>
            </Group>

            <Group visibleFrom="sm">
              <Link href="/cart">
                <Indicator inline label={totalItems} size={16}>
                  <Avatar color="blue" radius="sm">
                    <FaShoppingCart size="1.5rem" />
                  </Avatar>
                </Indicator>
              </Link>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/cart" className={classes.link}>
              Cart
            </Link>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Link href="/cart">
                <Indicator inline label={totalItems} size={16}>
                  <Avatar color="blue" radius="sm">
                    <FaShoppingCart size="1.5rem" />
                  </Avatar>
                </Indicator>
              </Link>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </div>
  );
};

export default NavBar;
