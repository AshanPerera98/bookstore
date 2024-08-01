import { create } from "zustand";
import { Book } from "@/interfaces";
import { TCategory, TSort } from "@/types/types";

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

  blockUI: boolean;
  error: { message: string; status: number } | null;

  setSearch: (value: string) => void;
  setSort: (value: TSort) => void;
  setCategory: (value: TCategory) => void;
  setFrom: (value: number) => void;
  setTo: (value: number) => void;
  setCount: (value: number) => void;

  fetchBooks: () => Promise<void>;
  navigatePage: (value: number) => Promise<void>;
};

export const useBookStore = create<BookStore>((set, get) => ({
  books: [],
  page: 1,
  totalPages: 0,

  seach: null,
  sort: "N-O",
  category: "All",
  from: null,
  to: null,
  count: 9,

  blockUI: false,
  error: null,

  setSearch: (seach) => {
    set({ seach, page: 1 });
  },
  setSort: (sort) => {
    set({ sort, page: 1 });
  },
  setCategory: (category) => {
    set({ category, page: 1 });
  },
  setFrom: (from) => {
    set({ from, page: 1 });
  },
  setTo: (to) => {
    set({ to, page: 1 });
  },
  setCount: (count) => {
    set({ count, page: 1 });
  },

  fetchBooks: async () => {
    set({ blockUI: true });

    let queryParams = `?sort=${get().sort}&length=${get().count}&page=${
      get().page
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
      next: { revalidate: 300 },
    });

    if (response.status === 200) {
      const { books, page, totalPages } = await response.json();
      set({ books, page, totalPages, blockUI: false, error: null });
    } else {
      const message = await response.json();
      set({ error: { message, status: response.status }, blockUI: false });
    }
  },

  navigatePage: async (value) => {
    set({ blockUI: true });

    let queryParams = `?sort=${get().sort}&length=${get().count}&page=${value}`;

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
      next: { revalidate: 300 },
    });

    if (response.status === 200) {
      const { books, page, totalPages } = await response.json();
      set({ books, page, totalPages, blockUI: false, error: null });
    } else {
      const message = await response.json();
      set({ error: { message, status: response.status }, blockUI: false });
    }
  },
}));
