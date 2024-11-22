import { ReactNode } from "react";

import { NavBar } from "@/app/(marketing)/_components/nav-bar";

type Props = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: Props) {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <NavBar />
      {children}
    </div>
  );
}
