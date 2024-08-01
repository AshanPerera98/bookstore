"use client";

import BookCard from "@/components/BookCard";
import { Book } from "@/interfaces";
import { useBookStore } from "@/store";
import { Loader } from "@mantine/core";
import Paginate from "./Paginate";

type props = {
  className?: string;
};

const BookList = ({ className }: props) => {
  const books = useBookStore((state) => state.books);

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
