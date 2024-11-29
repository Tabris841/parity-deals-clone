'use client';

import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useLayoutEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Careers', href: '/careers' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
];

export function Navigation() {
  const [visibleItems, setVisibleItems] = useState(navItems);
  const [overflowItems, setOverflowItems] = useState<typeof navItems>([]);
  const elTestRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useLayoutEffect(() => {
    let timeout: NodeJS.Timeout;

    const updateVisibleItems = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (elTestRef.current) {
          const navWidth = elTestRef.current.offsetWidth;
          let totalWidth = 68;
          let lastVisibleIndex = navItems.length;

          for (let i = 0; i < itemsRef.current.length; i++) {
            const item = itemsRef.current[i];

            console.log({
              item: item?.innerText,
              width: item?.offsetWidth,
            });

            if (item) {
              totalWidth += item.offsetWidth;
              if (totalWidth > navWidth) {
                lastVisibleIndex = i;
                console.log('INSIDE LOOP');
                console.log({ navWidth, totalWidth, lastVisibleIndex });
                console.log('-----');
                break;
              }
            }
          }

          console.log({ navWidth, totalWidth, lastVisibleIndex });

          setVisibleItems(navItems.slice(0, lastVisibleIndex));
          setOverflowItems(navItems.slice(lastVisibleIndex));
        }
      }, 500);
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  return (
    <>
      <div
        ref={elTestRef}
        className={cn('h-0 overflow-x-scroll whitespace-nowrap')}
      >
        <ul className="flex">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="px-4"
            >
              <Link
                href={item.href}
                className="text-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <nav className="flex items-center bg-background p-4">
        <ul className="flex">
          {visibleItems.map((item) => (
            <li key={item.name} className="px-4">
              <Link
                href={item.href}
                className="text-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {overflowItems.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {overflowItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>
    </>
  );
}
