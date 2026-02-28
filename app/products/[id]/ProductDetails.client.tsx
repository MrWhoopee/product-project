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

  const totalDiscount = appliedPromo
    ? data.discountPercentage + appliedPromo.discount
    : data.discountPercentage;

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Some error..</p>;

  return (
    <article className={css.container}>
      <header className={css.header}>
        <div className={css.imageWrapper}>
          <Image
            src={data.thumbnail}
            alt={data.title}
            fill
            className={css.image}
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <div className={css.headerInfo}>
          <h1 className={css.title}>{data.title}</h1>
          <p className={css.description}>{data.description}</p>
        </div>
      </header>

      <section className={css.grid} aria-label="Product specifications">
        <dl className={css.metaGroup}>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>Brand</dt>
            <dd className={css.metaValue}>{data.brand}</dd>
          </div>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>Category</dt>
            <dd className={css.metaValue}>{data.category}</dd>
          </div>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>Rating</dt>
            <dd className={css.metaValue}>{data.rating}</dd>
          </div>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>In Stock</dt>
            <dd className={css.metaValue}>{data.stock} pcs</dd>
          </div>
        </dl>

        <dl className={css.metaGroup}>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>SKU</dt>
            <dd className={css.metaValue}>{data.sku}</dd>
          </div>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>Weight</dt>
            <dd className={css.metaValue}>{data.weight}</dd>
          </div>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>Min. Order</dt>
            <dd className={css.metaValue}>{data.minimumOrderQuantity} pcs</dd>
          </div>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>Shipping</dt>
            <dd className={css.metaValue}>{data.shippingInformation}</dd>
          </div>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>Warranty</dt>
            <dd className={css.metaValue}>{data.warrantyInformation}</dd>
          </div>
          <div className={css.metaItem}>
            <dt className={css.metaLabel}>Returns</dt>
            <dd className={css.metaValue}>{data.returnPolicy}</dd>
          </div>
        </dl>
      </section>

      <div className={css.priceSection}>
        <CalcPrice price={data.price} discount={totalDiscount} />
      </div>

      <div className={css.actions}>
        <button className={css.promoBtn} onClick={() => setShowModal(true)}>
          {appliedPromo ? "Change Promo Code" : "Apply Promo Code"}
        </button>
        <Link href="/products" className={css.backBtn}>
          Back to Products
        </Link>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <PromoForm
            onApply={handleApplyPromo}
            appliedCode={appliedPromo?.code}
          />
        </Modal>
      )}
    </article>
  );
}
