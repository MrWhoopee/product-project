import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Udata Shop",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="notFoundContainer">
      <div className="notFoundContent">
        <div className="notFoundIcon">🔍</div>
        <h1 className="notFoundTitle">Page Not Found</h1>
        <p className="notFoundMessage">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <div className="notFoundActions">
          <Link href="/" className="notFoundButtonPrimary">
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
