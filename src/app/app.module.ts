import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { HttpMainInterceptor } from './shared/services/http-interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideNavMenuComponent } from './shared/components/header/side-nav-menu/side-nav-menu.component';
import { ShareModule } from './shared/modules/share/share.module';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(
    http,
    `${environment.ssrUrl}assets/i18n/`,
    '.json'
  );
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, SideNavMenuComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    ShareModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpMainInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
