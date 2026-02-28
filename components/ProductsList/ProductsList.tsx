"use client";
import { getProducts, PER_PAGE } from "@/lib/api";
import { Product } from "@/lib/types";
import ProductCard from "../ProductCard/ProductCard";
import css from "./ProductsList.module.css";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../Pagination/Pagination";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

interface Props {
  currentPage: number;
}

export default function ProductsList({ currentPage }: Props) {
  const { data, isLoading, error } = useQuery<{
    products: Product[];
    total: number;
  }>({
    queryKey: ["products", currentPage],
    queryFn: () => getProducts(currentPage),
  });

  if (isLoading) return <Loader />;
  if (error || !data) return <Error />;

  const totalPages = Math.ceil(data?.total / PER_PAGE);
  //   console.log(totalPages);
  return (
    <section>
      <ul className={css.list}>
        {data.products.map((product: Product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className={css.paginationWrapper}>
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      )}
    </section>
  );
}
