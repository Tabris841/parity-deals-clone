import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

import { BrandLogo } from '@/components/brand-logo';

export function NavBar() {
  return (
    <header className="flex bg-background py-4 shadow">
      <nav className="container flex items-center gap-10">
        <Link className="mr-auto" href="/dashboard">
          <BrandLogo />
        </Link>
        <Link href="/dashboard/products">Products</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/subscription">Subscription</Link>
        <UserButton />
      </nav>
    </header>
  );
}
