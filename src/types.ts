export interface FoodItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}