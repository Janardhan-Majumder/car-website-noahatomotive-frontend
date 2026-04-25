export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  description: string;
  image: string;
  images?: string[];
  condition?: "New" | "Used";
  mileage?: number;
  fuelType?: string;
  transmission?: string;
  location?: string;
  features?: string[];
  specs?: {
    engine?: string;
    power?: string;
    acceleration?: string;
    topSpeed?: string;
  };
  seller?: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
  };
  createdAt?: string;
  updatedAt?: string;
}
