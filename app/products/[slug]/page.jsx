import { notFound } from "next/navigation";
import { products } from "@/data/data";
import SingleProduct from "./SingleProduct";

export default async function Page({ params }) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <SingleProduct product={product} />;
}