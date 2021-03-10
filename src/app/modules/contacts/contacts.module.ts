import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../../shared/modules/share/share.module';

export const routes: Routes = [{ path: '', component: ContactsComponent }];

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      extend: true,
    }),
    ShareModule,
  ],
})
export class ContactsModule {}
