import { Title, ProductImage, Currency, Device, Version } from "./constants";

export type Brand = "Nintendo";

export interface Purchase {
  id: string;
  brand: Brand;
  title: Title;
  price: number;
  image: ProductImage;
  version: Version;
  device: Device;
  currency: Currency;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
