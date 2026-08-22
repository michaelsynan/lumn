export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating?: number;
  image: string;
  badge?: "best-seller" | "coming-soon" | "new";
  available: boolean;
}

export const products: Product[] = [
  {
    id: "lumn-veil",
    name: "LUMN Veil",
    description:
      "Crisp Pear, locally harvested and brewed. Sweet & balanced. Hints of honey.",
    price: 14.99,
    rating: 5.0,
    image: "/product-evening-blend.png",
    badge: "best-seller",
    available: true,
  },
  {
    id: "lumn-sol",
    name: "LUMN Sol",
    description:
      "Mango Hard Cider made with ripe mango, boasting a bright and a refreshing finish.",
    price: 14.99,
    rating: 4.9,
    image: "/product-morning-cold-brew.png",
    available: true,
  },
  {
    id: "lumn-cold-brew",
    name: "LUMN Cold Brew",
    description:
      "Cold Brew Coffee, smooth, rich, and full-bodied with a hint of chocolate.",
    price: 16.99,
    image: "/product-variety-pack.png",
    badge: "coming-soon",
    available: false,
  },
];
