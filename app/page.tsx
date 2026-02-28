import Hero from "@/components/Hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Udata Shop",
  description: "Welcome to Udata Shop - your destination for premium products.",
};

export default function Home() {
  return <Hero />;
}
