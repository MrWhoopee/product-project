import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

const PER_PAGE = 10;

export async function getProducts() {
  const { data } = await api.get("/products", { params: { limit: PER_PAGE } });
  return data;
}

export async function getProductById(id: string) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
