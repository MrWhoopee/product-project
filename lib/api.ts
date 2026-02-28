import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const PER_PAGE = 10;

export async function getProducts(page: number = 1) {
  const { data } = await api.get(`/products`, {
    params: { limit: PER_PAGE, skip: (page - 1) * PER_PAGE },
  });
  return data;
}

export async function getProductById(id: string) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
