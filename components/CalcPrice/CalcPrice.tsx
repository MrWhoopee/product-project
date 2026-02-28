import css from "./CalcPrice.module.css";

interface Props {
  price: number;
  discount: number;
}

export default function CalcPrice({ price, discount }: Props) {
  const safeDiscount = Math.min(discount, 100);
  const discountPrice = (price * (1 - safeDiscount / 100)).toFixed(2);
  return (
    <>
      <span className={css.oldPrice}>${price}</span> ${discountPrice}
    </>
  );
}
