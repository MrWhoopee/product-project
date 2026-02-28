import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <Link href={`/products/${product.id}`}>View Product</Link>
    </div>
  );
}
