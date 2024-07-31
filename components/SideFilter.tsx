"use client";

import {
  Button,
  NativeSelect,
  RangeSlider,
  Text,
  TextInput,
} from "@mantine/core";
import categories from "@/constants/categories";

type props = {
  className?: string;
};

const SideFilter = ({ className }: props) => {
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
        />

        <NativeSelect
          mt="md"
          label="Sort order"
          data={[
            "Newest to oldest",
            "Oldest to newest",
            "Title A to Z",
            "Title Z to A",
            "Price low to high",
            "Price high to low",
          ]}
          description="Sort the results by the order"
        />

        <NativeSelect
          mt="md"
          label="Category"
          data={categories}
          description="Filter books by category"
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
        />

        <NativeSelect
          mt="md"
          label="Results per page"
          data={["9", "15", "30", "60"]}
          description="How many results to show in a page"
        />

        <Button
          radius="md"
          style={{ flex: 1 }}
          mt={24}
          justify="center"
          fullWidth
        >
          Filter
        </Button>
      </form>
    </div>
  );
};

export default SideFilter;
