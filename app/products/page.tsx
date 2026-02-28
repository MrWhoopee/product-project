import ProductsList from "@/components/ProductsList/ProductsList";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Products | Udata Shop",
  description: "Explore our full catalog of high-quality products.",
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  return <ProductsList currentPage={currentPage} />;
}
