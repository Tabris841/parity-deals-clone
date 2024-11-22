import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

import { BrandLogo } from '@/components/brand-logo';

export function NavBar() {
  return (
    <header className="fixed top-0 z-10 flex w-full bg-background/95 py-6 shadow-xl">
      <nav className="container flex items-center gap-10 font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link className="text-lg" href="#">
          Features
        </Link>
        <Link className="text-lg" href="/#pricing">
          Pricing
        </Link>
        <Link className="text-lg" href="#">
          About
        </Link>
        <span className="text-lg">
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}
