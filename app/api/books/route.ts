import { Book } from "@/interfaces";
import { NextRequest, NextResponse } from "next/server";
import { TCategory, TSort } from "@/types/types.js";

import books from "./../../../db/books.js";

export const GET = async (reqest: NextRequest) => {
  // Query parameter extranction ----------------------------------------

  const searchParams = reqest.nextUrl.searchParams;

  const sort: TSort = (searchParams.get("sort") as TSort) || "N-O";

  const pageLength: number = Number(searchParams.get("length")) || 9;

  const page: number = Number(searchParams.get("page")) || 1;

  const search: string | null = searchParams.get("search");

  const category: TCategory | null = searchParams.get("category") as TCategory;

  const from: number = Number(searchParams.get("from"));

  const to: number = Number(searchParams.get("to"));

  console.log(sort, page, pageLength, search, category, from, to);

  let allBooks: Book[] = Array.from(books);

  // Start filteration ---------------------------------------------------
  let sortedBooks: Book[] = [];

  if (category && category !== "All") {
    allBooks = allBooks.filter((book) => book.category === category);
  }

  if (from && to) {
    allBooks = allBooks.filter(
      (book) => book.price >= from && book.price <= to
    );
  }

  if (search) {
    const searchString = search.toLocaleLowerCase();
    allBooks = allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchString) ||
        book.author.toLocaleLowerCase().includes(searchString)
    );
  }

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

  const totalPages =
    sortedBooks.length % pageLength === 0
      ? Math.floor(sortedBooks.length / pageLength)
      : Math.ceil(sortedBooks.length / pageLength);

  const finalBooks = sortedBooks.splice((page - 1) * pageLength, pageLength);

  return NextResponse.json(
    { books: finalBooks, page, totalPages },
    { status: 200 }
  );
};
