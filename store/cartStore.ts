import { create } from "zustand";
import { Address, StoredBook } from "@/interfaces";
import { TCheckoutState } from "@/types/types";

type CartStore = {
  items: StoredBook[];
  totalItems: number;
  checkoutState: TCheckoutState;

  address: Address | null;

  addItem: (item: StoredBook) => void;
  removeItem: (id: string) => void;
  incrementQuantity: (id: string, value: boolean) => void;
  checkItemInCart: (id: string) => boolean;
  getCheckoutDetails: () => { totalItems: number; totalPrice: number };
  setCheckoutState: (state: TCheckoutState) => void;
  resetStore: () => void;

  setAddress: (address: Address) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  totalItems: 0,
  checkoutState: "NONE",

  address: null,

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

  setCheckoutState: (state) => {
    set({ checkoutState: state });
  },

  resetStore: () => {
    set({ items: [], totalItems: 0, checkoutState: "NONE", address: null });
  },

  setAddress: (address) => {
    set({ address });
  },
}));
