import {
  Device,
  Title,
  ProductImage,
  Version,
  Description,
  Currency,
} from "./constants";
import { Brand } from "./types";

export interface Product {
  id: string;
  brand: Brand;
  title: Title;
  price: number;
  image: ProductImage;
  version: Version;
  device: Device;
  description: Description;
  currency: Currency;
  stock: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "35",
    brand: "Nintendo",
    title: Title.BOTW,
    price: 59.99,
    image: ProductImage.BOTW,
    version: Version.physical,
    device: Device.switch,
    description: Description.BOTW,
    currency: Currency.USD,
    stock: 2,
  },
  {
    id: "30",
    brand: "Nintendo",
    title: Title.ALBW,
    price: 49.99,
    image: ProductImage.ALBW,
    version: Version.physical,
    device: Device.ds,
    description: Description.ALBW,
    currency: Currency.INR,
    stock: 3,
  },
  {
    id: "31",
    brand: "Nintendo",
    title: Title.hyruleWarriors,
    price: 59.99,
    image: ProductImage.hyruleWarriors,
    version: Version.digital,
    device: Device.switch,
    description: Description.hyruleWarriors,
    currency: Currency.USD,
    stock: 4,
  },
  {
    id: "4",
    brand: "Nintendo",
    title: Title.linksAwakening,
    price: 59.99,
    image: ProductImage.linksAwakening,
    version: Version.digital,
    device: Device.switch,
    description: Description.linksAwakening,
    currency: Currency.INR,
    stock: 5,
  },
  {
    id: "0",
    brand: "Nintendo",
    title: Title.gameAndWatch,
    price: 49.99,
    image: ProductImage.gameAndWatch,
    version: Version.physical,
    device: Device.gameAndWatch,
    description: Description.gameAndWatch,
    currency: Currency.USD,
    stock: 10,
  },
  {
    id: "1",
    brand: "Nintendo",
    title: Title.legendOfZelda,
    price: 1050.0,
    image: ProductImage.legendOfZelda,
    version: Version.physical,
    device: Device.nes,
    description: Description.legendOfZelda,
    currency: Currency.INR,
    stock: 1,
  },
  {
    id: "10",
    brand: "Nintendo",
    title: Title.OOT,
    price: 39.99,
    image: ProductImage.OOT,
    version: Version.physical,
    device: Device.n64,
    description: Description.OOT,
    currency: Currency.USD,
    stock: 6,
  },
  {
    id: "11",
    brand: "Nintendo",
    title: Title.majorasMask,
    price: 49.99,
    image: ProductImage.majorasMask,
    version: Version.physical,
    device: Device.n64,
    description: Description.majorasMask,
    currency: Currency.INR,
    stock: 7,
  },
  {
    id: "3",
    brand: "Nintendo",
    title: Title.ALTTP,
    price: 59.99,
    image: ProductImage.ALTTP,
    version: Version.physical,
    device: Device.snes,
    description: Description.ALTTP,
    currency: Currency.USD,
    stock: 100,
  },
  {
    id: "41",
    brand: "Nintendo",
    title: Title.TOTK,
    price: 0,
    image: ProductImage.TOTK,
    version: Version.null,
    device: Device.sheikahSlate,
    description: Description.TOTK,
    currency: Currency.INR,
    stock: 0,
  },
];
