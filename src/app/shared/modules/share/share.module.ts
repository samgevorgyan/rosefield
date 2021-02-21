import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {LocalizeRouterModule} from '@gilsdav/ngx-translate-router';
// translate modules
import {TranslateModule} from '@ngx-translate/core';
// Material module
import {CustomMaterialModule} from '../custom-material/custom-material.module';
// routes
import {routes} from 'src/app/app.routes';

@NgModule({
  imports: [
    TranslateModule.forChild(),
    CustomMaterialModule,
    LocalizeRouterModule.forChild(routes),
  ],
  exports: [
    TranslateModule,
    LocalizeRouterModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FlexLayoutModule,
  ],
})
export class ShareModule {
}
