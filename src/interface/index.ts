export interface IProductsTypes {
  _id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  stock: number;
  role: "Sale" | "New" | "";
  quantity?: number;
}
export interface ICategoriesTypes {
  _id: number;
  title: string;
  img: string;
}
export interface IBlogsTypes {
  _id: number;
  title: string;
  img: string;
  createdAt: string;
  description: string;
}

export interface User {
  authId: string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneMobile?: number;
  imageUrl: string;
  role: "admin" | "user" | "superAdmin";
  createdAt: Date;
  updatedAt: Date;
}

export interface TCartItems {
  _id: string;
  userId: string;
  sessionId: string;
  productId: IProductsTypes;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
