import { ReactNode } from 'react';

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </div>
  );
}
