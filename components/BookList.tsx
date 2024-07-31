import BookCard from "@/components/BookCard";
import { Book } from "@/interfaces/Book";

type apiResponse = {
  books: Book[];
  page: number;
  totalPages: number;
};

type props = {
  className?: string;
};

const BookList = async ({ className }: props) => {
  const response = await fetch(`http://localhost:3000/api/books?length=9`, {
    next: { revalidate: 300 },
  });
  const { books, page, totalPages }: apiResponse = await response.json();

  return (
    <div className={`${className} grid gap-8 grid-cols-3`}>
      {books.map((book: Book) => {
        return <BookCard key={book.id} {...book} />;
      })}
    </div>
  );
};

export default BookList;
