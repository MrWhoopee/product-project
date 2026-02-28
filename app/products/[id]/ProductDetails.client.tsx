import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/lib/api";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Some error..</p>;

  return <div>Product Details {id}</div>;
}
