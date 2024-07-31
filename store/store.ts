import { Book } from "@/interfaces/Book";
import { TCategory, TSort } from "@/types/types";
import { create } from "zustand";

type BookStore = {
  books: Book[];
  page: number;
  totalPages: number;

  seach: string | null;
  sort: TSort;
  category: TCategory;
  from: number | null;
  to: number | null;
  count: number;

  setSearch: (value: string) => void;
  setSort: (value: TSort) => void;
  setCategory: (value: TCategory) => void;
  setFrom: (value: number) => void;
  setTo: (value: number) => void;
  setCount: (value: number) => void;

  fetchBooks: () => Promise<void>;
  nextPage: (value: boolean) => Promise<void>;
};

export const useBookStore = create<BookStore>((set, get) => ({
  books: [],
  page: 0,
  totalPages: 0,

  seach: null,
  sort: "N-O",
  category: "All",
  from: null,
  to: null,
  count: 9,

  setSearch: (seach) => {
    set({ seach });
  },
  setSort: (sort) => {
    set({ sort });
  },
  setCategory: (category) => {
    set({ category });
  },
  setFrom: (from) => {
    set({ from });
  },
  setTo: (to) => {
    set({ to });
  },
  setCount: (count) => {
    set({ count });
  },

  fetchBooks: async () => {
    let queryParams = `?sort=${get().sort}&length=${get().count}`;

    if (get().seach) {
      queryParams = `${queryParams}&search=${get().seach}`;
    }
    if (get().category) {
      queryParams = `${queryParams}&category=${get().category}`;
    }
    if (get().from) {
      queryParams = `${queryParams}&from=${get().from}`;
    }
    if (get().to) {
      queryParams = `${queryParams}&to=${get().to}`;
    }

    const response = await fetch(`/api/books${queryParams}`, {
      cache: "no-store",
    });
    const { books, page, totalPages } = await response.json();

    set({ books, page, totalPages });
  },

  nextPage: async (value) => {
    let queryParams = `?sort=${get().sort}&length=${
      value ? get().count + 1 : get().count - 1
    }`;

    if (get().seach) {
      queryParams = `${queryParams}&search=${get().seach}`;
    }
    if (get().category) {
      queryParams = `${queryParams}&category=${get().category}`;
    }
    if (get().from) {
      queryParams = `${queryParams}&from=${get().from}`;
    }
    if (get().to) {
      queryParams = `${queryParams}&to=${get().to}`;
    }

    const response = await fetch(`/api/books${queryParams}`, {
      cache: "no-store",
    });
    const { books, page, totalPages } = await response.json();

    set({ books, page, totalPages });
  },
}));
