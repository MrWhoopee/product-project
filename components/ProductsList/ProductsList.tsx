"use client";
import { getProducts } from "@/lib/api";
import { Product } from "@/lib/types";
import ProductCard from "../ProductCard/ProductCard";
import css from "./ProductsList.module.css";
import { useQuery } from "@tanstack/react-query";

export default function ProductsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Some error..</p>;
  return (
    <section>
      <ul className={css.list}>
        {data.products.map((product: Product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
