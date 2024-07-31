import { create } from "zustand";
import { StoredBook } from "@/interfaces";

type CartStore = {
  items: StoredBook[];
  totalItems: number;

  addItem: (item: StoredBook) => void;
  removeItem: (id: string) => void;
  incrementQuantity: (id: string, value: boolean) => void;
  checkItemInCart: (id: string) => boolean;
  getCheckoutDetails: () => { totalItems: number; totalPrice: number };
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  totalItems: 0,

  addItem: (item) => {
    set((state) => ({
      items: [item, ...state.items],
      totalItems: state.totalItems + 1,
    }));
  },

  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((i) => i.bookId !== id),
      totalItems: state.totalItems - 1,
    }));
  },

  incrementQuantity: (id, value) => {
    const newItems = get().items.map((item) => {
      if (item.bookId === id) {
        return {
          ...item,
          quantity: value ? item.quantity + 1 : item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    set({ items: newItems });
  },

  checkItemInCart: (id) => {
    return get().items.some((item) => item.bookId === id);
  },

  getCheckoutDetails: () => {
    let totalItems = 0;
    let totalPrice = 0;

    get().items.forEach((item) => {
      totalItems += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    return { totalItems, totalPrice };
  },
}));
