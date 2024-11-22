import { CheckIcon } from 'lucide-react';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
};

export function Feature({ children, className }: Props) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CheckIcon className="size-4 rounded-full bg-accent/25 stroke-accent p-0.5" />
      <span>{children}</span>
    </div>
  );
}
