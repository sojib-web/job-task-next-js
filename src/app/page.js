import Image from "next/image";
import Hero from "./components/Hero";
import ProductHighlights from "./products/page";

export default function Home() {
  return (
    <div className=" bg-gradient-to-br from-purple-200 via-blue-200 to-pink-100">
      <Hero />
      <ProductHighlights />
    </div>
  );
}
