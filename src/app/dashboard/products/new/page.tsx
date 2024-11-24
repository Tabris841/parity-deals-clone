import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { ProductDetailsForm } from '../../_components/forms/product-details-form';
import { PageWithBackButton } from '../../_components/page-with-back-button';

export default function NewProductPage() {
  return (
    <PageWithBackButton
      pageTitle="Create Product"
      backButtonHref="/dashboard/products"
    >
      {/*<HasPermission*/}
      {/*  permission={canCreateProduct}*/}
      {/*  renderFallback*/}
      {/*  fallbackText="You have already created the maximum number of products. Try upgrading your account to create more."*/}
      {/*>*/}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductDetailsForm />
        </CardContent>
      </Card>
      {/*</HasPermission>*/}
    </PageWithBackButton>
  );
}