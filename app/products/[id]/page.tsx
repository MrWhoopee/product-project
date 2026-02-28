import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProductById } from "@/lib/api";
import ProductDetails from "./ProductDetails.client";
import { notFound } from "next/navigation";
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const id = (await params).id;
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
  if (!data) {
    notFound();
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetails />
    </HydrationBoundary>
  );
}
