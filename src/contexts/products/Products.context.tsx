import { createContext } from "react";
import { ProductsContextType } from "./types";

export const ProductsContext = createContext<ProductsContextType | null>(null);
