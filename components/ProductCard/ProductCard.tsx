import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import CalcPrice from "../CalcPrice/CalcPrice";
import css from "./ProductCard.module.css";
interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <article className={css.card}>
      <div className={css.imageContainer}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className={css.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h2 className={css.title}>{product.title}</h2>
      <p className={css.description}>{product.description}</p>
      <div className={css.priceWrapper}>
        <CalcPrice
          price={product.price}
          discount={product.discountPercentage}
        />
      </div>
      <Link href={`/products/${product.id}`} className={css.button}>
        View Product
      </Link>
    </article>
  );
}
