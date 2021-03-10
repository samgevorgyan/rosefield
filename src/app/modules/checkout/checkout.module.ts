import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../../shared/modules/share/share.module';

export const routes: Routes = [{ path: '', component: CheckoutComponent }];

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      extend: true,
    }),
    ShareModule,
  ],
})
export class CheckoutModule {}
