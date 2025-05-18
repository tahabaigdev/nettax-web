import { create } from "zustand";

type MenuState = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;

  activeDropdown: boolean;
  setActiveDropdown: (value: boolean) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  // Mobile Menu
  isMenuOpen: false,
  setIsMenuOpen: (value) => set({ isMenuOpen: value }),

  // Dropdown Menu
  activeDropdown: false,
  setActiveDropdown: (value) => set({ activeDropdown: value }),
}));
