"use client";

import BookCard from "@/components/BookCard";
import { Book } from "@/interfaces/Book";
import { useBookStore } from "@/store/store";

type props = {
  className?: string;
};

const BookList = ({ className }: props) => {
  const { books, page, totalPages } = useBookStore((state) => state);

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
