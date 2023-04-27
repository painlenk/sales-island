interface IProduct {
  id: string;
  name: string;
  price: string;
  stock: number;
  updatedAt: string;
  createdAt: string;
}

type ICreateProduct = Omit<IProduct, "id" | "updatedAt" | "createdAt">;
