import { create } from "zustand";

export const useFiltersStore = create((set) => ({
    startPrice: 0,
    category: 'all',
    setCategory: (event) => set({category: event.target.value}),
    setStartPrice: (event) => set({startPrice: event.target.value})
}))