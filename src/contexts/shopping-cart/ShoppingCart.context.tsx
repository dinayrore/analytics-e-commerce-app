import { createContext } from "react";
import { ShoppingCartContextType } from "./types";

export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>(null);
