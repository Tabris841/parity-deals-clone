import { auth } from '@clerk/nextjs/server';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

import { NoProducts } from '@/app/dashboard/_components/no-product';
import { ProductGrid } from '@/app/dashboard/_components/product-grid';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/server/db/products';

export default async function Products() {
  const { userId, redirectToSignIn } = await auth();
  if (userId == null) return redirectToSignIn();

  const products = await getProducts(userId);

  if (products.length === 0) return <NoProducts />;

  return (
    <>
      <h1 className="mb-6 flex justify-between text-3xl font-semibold">
        Products
        <Button asChild>
          <Link href="/dashboard/products/new">
            <PlusIcon className="mr-2 size-4" /> New Product
          </Link>
        </Button>
      </h1>
      <ProductGrid products={products} />
    </>
  );
}
