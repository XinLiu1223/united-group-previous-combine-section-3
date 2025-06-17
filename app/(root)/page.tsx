import ProductList from "@/components/shared/product/product-list";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ViewAllProductsButton from "@/components/view-all-products-button";
import IconBoxes from "@/components/icon-boxes";
import DealCountdown from "@/components/deal-countdown";
// import sampleData from "@/db/sample-data";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  // await delay(500);
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  // console.log(sampleData);

  return (
    // <Button>
    <>
      {/* <Link href="/" className="flex-start">
        Home
      </Link> */}

      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList
        // data={sampleData.products}
        data={latestProducts}
        title="Newest Arrivals"
        limit={4}
      />
      <ViewAllProductsButton />
      <DealCountdown />
      <IconBoxes />
      {/* </Button> */}
    </>
  );
};

export default Homepage;
