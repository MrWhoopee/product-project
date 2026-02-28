import ProductsList from "@/components/ProductsList/ProductsList";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  return <ProductsList currentPage={currentPage} />;
}
