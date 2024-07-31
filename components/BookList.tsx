"use client";

import BookCard from "@/components/BookCard";
import { Book } from "@/interfaces";
import { useBookStore } from "@/store";
import { Loader } from "@mantine/core";

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
    <div
      className={`${className} grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8`}
    >
      {books.map((book: Book) => {
        return <BookCard key={book.id} {...book} />;
      })}
    </div>
  );
};

export default BookList;
