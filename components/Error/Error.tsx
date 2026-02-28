"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Error.module.css";

export default function Error() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <main className={styles.errorContainer}>
      <div className={styles.content}>
        <div className={styles.icon}>⚠️</div>
        <h1 className={styles.title}>Something went wrong!</h1>
        <p className={styles.message}>
          We encountered an unexpected error. Don&apos;t worry, we&apos;re
          taking you back to safety.
        </p>

        <div className={styles.status}>
          Redirecting to home in{" "}
          <span className={styles.countdown}>{countdown}</span>s...
        </div>

        <div className={styles.actions}>
          <Link href="/" className={styles.buttonSecondary}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
