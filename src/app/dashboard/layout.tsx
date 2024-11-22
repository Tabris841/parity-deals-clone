import { ReactNode } from 'react';

import { NavBar } from '@/app/dashboard/_components/nav-bar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-accent/5">
      <NavBar />
      <div className="container py-6">{children}</div>
    </div>
  );
}
