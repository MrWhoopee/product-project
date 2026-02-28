import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getProductById } from "@/lib/api";
import ProductDetails from "./ProductDetails.client";
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const id = (await params).id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetails />
    </HydrationBoundary>
  );
}
