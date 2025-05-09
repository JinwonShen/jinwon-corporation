// src/app/products/page.tsx
import dynamic from "next/dynamic";

const ProductsClient = dynamic(() => import("./ProductsClient"), { ssr: false });

export default function ProductsPage() {
  return <ProductsClient />;
}
