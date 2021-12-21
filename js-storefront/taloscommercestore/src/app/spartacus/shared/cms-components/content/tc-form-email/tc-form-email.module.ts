import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TcFormEmailComponent } from './tc-form-email.component';
import { CmsConfig, ConfigModule, I18nModule } from '@spartacus/core';
import { FormErrorsModule, PageComponentModule } from '@spartacus/storefront';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TcFormEmailComponent],
  imports: [
    FormErrorsModule,
    ReactiveFormsModule,
    CommonModule,
    PageComponentModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents: {
        FormEmailComponent: {
          component: TcFormEmailComponent,
        },
      },
    } as CmsConfig),
  ],
  entryComponents: [TcFormEmailComponent],
  exports: [TcFormEmailComponent],

})
export class TcFormEmailModule { }
