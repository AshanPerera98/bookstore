import BookCard from "@/components/BookCard";
import { Book } from "@/interfaces/Book";

type apiResponse = {
  books: Book[];
  page: number;
  totalPages: number;
};

const BookList = async () => {
  const response = await fetch(`http://localhost:3000/api/books?length=10`);
  new Promise((resolver) => setTimeout(resolver, 1000));
  const { books, page, totalPages }: apiResponse = await response.json();

  return (
    <div className="grid gap-12 grid-cols-3">
      {books.map((book) => {
        return <BookCard key={book.id} {...book} />;
      })}
    </div>
  );
};

export default BookList;
