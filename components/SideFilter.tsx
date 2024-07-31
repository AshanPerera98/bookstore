"use client";

import {
  Button,
  NativeSelect,
  RangeSlider,
  Text,
  TextInput,
} from "@mantine/core";
import { categories, sortOptions, resultOptions } from "@/constants";
import { useEffect } from "react";
import { useBookStore } from "@/store/store";
import { TCategory, TSort } from "@/types/types";

type props = {
  className?: string;
};

const SideFilter = ({ className }: props) => {
  const {
    setSearch,
    setCategory,
    setSort,
    setFrom,
    setTo,
    setCount,
    fetchBooks,
  } = useBookStore((state) => state);

  const fetchFilteredBooks = () => {
    fetchBooks();
  };

  useEffect(() => {
    fetchFilteredBooks();
  }, []);

  return (
    <div
      className={`${className} p-6 bg-white rounded-2xl h-min shadow-xl shadow-gray-100`}
    >
      <form>
        <Text fz="lg" fw={700}>
          Filters
        </Text>
        <TextInput
          mt="md"
          label="Title or author"
          placeholder="Enter text"
          description="Search books by title or author"
          onChange={(e) => setSearch(e.target.value)}
        />

        <NativeSelect
          mt="md"
          label="Sort order"
          data={sortOptions}
          description="Sort the results by the order"
          onChange={(e) => setSort(e.target.value as TSort)}
        />

        <NativeSelect
          mt="md"
          label="Category"
          data={categories}
          description="Filter books by category"
          onChange={(e) => setCategory(e.target.value as TCategory)}
        />

        <Text fz="sm" fw={500} mt="md">
          Price range
        </Text>
        <Text fz="xs" c="dimmed">
          Filter results by price range
        </Text>
        <RangeSlider
          minRange={1}
          min={5}
          max={20}
          step={0.5}
          defaultValue={[1, 20]}
          label={(value) => `$${value}`}
          marks={[
            { value: 1, label: "$1" },
            { value: 20, label: "$20" },
          ]}
          mt={12}
          mb={32}
          onChange={(e) => {
            const [from, to] = e;
            setFrom(from);
            setTo(to);
          }}
        />

        <NativeSelect
          mt="md"
          label="Results per page"
          data={resultOptions}
          description="How many results to show in a page"
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <Button
          radius="md"
          style={{ flex: 1 }}
          mt={24}
          justify="center"
          fullWidth
          onClick={fetchFilteredBooks}
        >
          Filter
        </Button>
      </form>
    </div>
  );
};

export default SideFilter;
