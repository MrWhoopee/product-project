import { getProducts } from "@/lib/api";
import { Product } from "@/lib/types";
import ProductCard from "../ProductCard/ProductCard";

export default async function ProductsList() {
  const { products } = await getProducts();
  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
