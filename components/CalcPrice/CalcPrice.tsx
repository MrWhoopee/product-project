import css from "./CalcPrice.module.css";

interface Props {
  price: number;
  discount: number;
}

export default function CalcPrice({ price, discount }: Props) {
  const discountPrice = (price * (1 - discount / 100)).toFixed(2);
  return (
    <>
      <span className={css.oldPrice}>${price}</span> ${discountPrice}
    </>
  );
}
