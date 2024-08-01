"use client";

import BookCard from "@/components/BookCard";
import { Book } from "@/interfaces";
import { useBookStore } from "@/store";
import { Loader, Text } from "@mantine/core";
import Paginate from "./Paginate";
import Image from "next/image";

type props = {
  className?: string;
};

const BookList = ({ className }: props) => {
  const { books, error } = useBookStore((state) => state);

  if (error) {
    return (
      <div className="w-full flex flex-col justify-evenly items-center">
        <Text fz="xl" c="dimmed">
          Oops! {error.message}
        </Text>
        <Image
          src={
            error.status === 500
              ? "/undraw_server_down.svg"
              : "/undraw_no_data.svg"
          }
          alt="Error image"
          width={400}
          height={400}
        />
      </div>
    );
  }

  if (!books.length) {
    return (
      <div className="grow flex justify-center items-center bg-white rounded-2xl">
        <Loader color="blue" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <Paginate className="mb-6 mt-4" />
      <div
        className={`${className} w-full grid-cols-1 place-items-center grid xl:grid-cols-3 md:grid-cols-2 md:place-items-baseline gap-8`}
      >
        {books.map((book: Book) => {
          return <BookCard key={book.id} {...book} />;
        })}
      </div>
      <Paginate className="mt-6 mb-4" />
    </div>
  );
};

export default BookList;
