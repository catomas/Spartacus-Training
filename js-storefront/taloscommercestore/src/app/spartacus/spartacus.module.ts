import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BaseStorefrontModule } from '@spartacus/storefront';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';

@NgModule({
  declarations: [],
  imports: [SpartacusFeaturesModule, SpartacusConfigurationModule, BaseStorefrontModule],
  exports: [BaseStorefrontModule],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SpartacusModule {}
