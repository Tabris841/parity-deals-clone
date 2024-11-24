import { auth } from '@clerk/nextjs/server';
import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getProducts } from '@/server/db/products';

import { NoProducts } from './_components/no-product';
import { ProductGrid } from './_components/product-grid';

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth();
  if (userId == null) return redirectToSignIn();

  const products = await getProducts(userId, { limit: 6 });

  if (products.length === 0) return <NoProducts />;

  return (
    <>
      <h2 className="mb-6 flex justify-between text-3xl font-semibold">
        <Link
          className="group flex items-center gap-2 hover:underline"
          href="/dashboard/products"
        >
          Products
          <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Button asChild>
          <Link href="/dashboard/products/new">
            <PlusIcon className="mr-2 size-4" />
            New Product
          </Link>
        </Button>
      </h2>
      <ProductGrid products={products} />
      <h2 className="mb-6 mt-12 flex justify-between text-3xl font-semibold">
        <Link
          href="/dashboard/analytics"
          className="group flex items-center gap-2 hover:underline"
        >
          Analytics
          <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
        </Link>
      </h2>
      {/*<HasPermission permission={canAccessAnalytics} renderFallback>*/}
      {/*  <AnalyticsChart userId={userId} />*/}
      {/*</HasPermission>*/}
    </>
  );
}
