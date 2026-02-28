"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getProductById } from "@/lib/api";
import Image from "next/image";
import CalcPrice from "@/components/CalcPrice/CalcPrice";
import Link from "next/link";
import css from "./ProductDetails.module.css";
import Modal from "@/components/Modal/Modal";
import PromoForm from "@/components/PromoForm/PromoForm";
import { Promo } from "@/lib/types";

export default function ProductDetails() {
  const [showModal, setShowModal] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<Promo | null>(null);
  const { id } = useParams<{ id: string }>();
  const handleApplyPromo = (promo: Promo) => {
    setAppliedPromo(promo);
    setShowModal(false);
  };

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
      <button className={css.promoBtn} onClick={() => setShowModal(true)}>
        Apply Promo Code
      </button>
      <Link href="/products">Back to Products</Link>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PromoForm
            onApply={handleApplyPromo}
            appliedCode={appliedPromo?.code}
          />
        </Modal>
      )}
    </div>
  );
}
