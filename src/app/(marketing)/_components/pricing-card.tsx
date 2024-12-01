import { SignUpButton } from '@clerk/nextjs';

import { Feature } from '@/app/(marketing)/_components/feature';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { subscriptionTiersInOrder } from '@/data/subscription-tiers';
import { formatCompactNumber } from '@/lib/formatters';
import { cn } from '@/lib/utils';

type Props = (typeof subscriptionTiersInOrder)[number];

export function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: Props) {
  const isMostPopular = name === 'Standard';

  return (
    <Card
      className={cn(
        'relative overflow-hidden rounded-3xl shadow-none',
        isMostPopular ? 'border-2 border-accent' : 'border-none',
      )}
    >
      {isMostPopular && (
        <div className="absolute -right-8 top-24 origin-top-right rotate-45 bg-accent px-10 py-1 text-accent-foreground">
          Most popular
        </div>
      )}
      <CardHeader>
        <div className="mb-8 font-semibold text-accent">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="w-full rounded-lg text-lg"
            variant={isMostPopular ? 'accent' : 'default'}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <Feature className="font-bold">
          {maxNumberOfProducts}{' '}
          {maxNumberOfProducts === 1 ? 'product' : 'products'}
        </Feature>
        <Feature>PPP discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  );
}
