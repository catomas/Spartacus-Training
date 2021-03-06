import { OccEndpoint } from '@spartacus/core';

declare module '@spartacus/core' {
  interface OccEndpoints {
    /**
     * Get referred customers endpoint
     */
    referredCustomers?: string | OccEndpoint;

    /**
     * Referred customers detail endpoint
     */
    referredCustomerDetail?: string | OccEndpoint;
  }
}
