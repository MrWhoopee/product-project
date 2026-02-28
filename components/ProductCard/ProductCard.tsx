import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return <div>{product.title}</div>;
}
