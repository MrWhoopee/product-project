"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/lib/api";
import Image from "next/image";
import CalcPrice from "@/components/CalcPrice/CalcPrice";
import Link from "next/link";
import css from "./ProductDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Some error..</p>;

  return (
    <div>
      Product Details {id}
      <Image src={data.thumbnail} alt={data.title} width={200} height={200} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <CalcPrice price={data.price} discount={data.discountPercentage} />
      <button>Apply Promo Code</button>
      <Link href="/products">Back to Products</Link>
    </div>
  );
}
