import Link from "next/link";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <span className={css.badge}>&#10022; New arrivals every week</span>

      <h1 className={css.title}>
        Discover Products You&apos;ll{" "}
        <span className={css.highlight}>Love</span>
      </h1>

      <p className={css.subtitle}>
        Browse our curated collection of top-rated products. Quality you can
        trust, at prices you&apos;ll appreciate.
      </p>

      <div className={css.actions}>
        <Link href="/products" className={css.btnPrimary}>
          Shop Now
        </Link>
      </div>

      <div className={css.stats}>
        <div className={css.stat}>
          <span className={css.statNumber}>200+</span>
          <span className={css.statLabel}>Products</span>
        </div>
        <div className={css.stat}>
          <span className={css.statNumber}>4.8&#9733;</span>
          <span className={css.statLabel}>Avg. Rating</span>
        </div>
        <div className={css.stat}>
          <span className={css.statNumber}>Fast</span>
          <span className={css.statLabel}>Delivery</span>
        </div>
      </div>
    </section>
  );
}
