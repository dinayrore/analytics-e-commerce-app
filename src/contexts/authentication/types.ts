import { User, Purchase } from "services/data/types";

export type AuthenticationContextType = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, name: string) => void;
  onLogout: (cart: Purchase[]) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  name: string;
  setName: (name: string) => void;
};
