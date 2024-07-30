import { Book } from "@/interfaces/Book";
import { NextRequest, NextResponse } from "next/server";

import books from "./../../../db/books.js";

type TSort = "A-Z" | "Z-A" | "L-H" | "H-L" | "O-N" | "N-O";
type TLength = 10 | 20;

export const GET = async (reqest: NextRequest) => {
  const sort: TSort =
    (reqest.nextUrl.searchParams.get("sort") as TSort) || "A-Z";

  const pageLength: TLength =
    (Number(reqest.nextUrl.searchParams.get("length")) as TLength) || 10;

  const page: number = Number(reqest.nextUrl.searchParams.get("page")) || 1;

  const allBooks: Book[] = books;

  let sortedBooks: Book[] = [];
  switch (sort) {
    case "A-Z":
      sortedBooks = allBooks.sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "Z-A":
      sortedBooks = allBooks.sort((a, b) => b.title.localeCompare(a.title));
      break;

    case "L-H":
      sortedBooks = allBooks.sort((a, b) => a.price - b.price);
      break;

    case "H-L":
      sortedBooks = allBooks.sort((a, b) => b.price - a.price);
      break;

    case "O-N":
      sortedBooks = allBooks.sort((a, b) => a.published - b.published);
      break;

    case "N-O":
      sortedBooks = allBooks.sort((a, b) => b.published - a.published);
      break;
  }

  const finalBooks = sortedBooks.splice((page - 1) * pageLength, pageLength);

  const totalPages =
    allBooks.length % pageLength === 0
      ? Math.floor(allBooks.length / pageLength)
      : Math.floor(allBooks.length / pageLength) + 1;

  return NextResponse.json(
    { books: finalBooks, page, totalPages },
    { status: 200 }
  );
};
