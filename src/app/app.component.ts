import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from './shared/services/language.service';
import {
  NavigationEnd,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { fadeInAnimation } from './animations/fade-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
})
export class AppComponent implements OnInit {
  title = 'home';
  isAdmin = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private translate: TranslateService,
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event) => {
          if (event instanceof RouterEvent) {
            this.isAdmin = event.url.includes('admin/');
          }
        });
      const languageOfBrowser = this.translate.getBrowserLang();
      const languageFromUrl = this.languageService.language;
      const lang: string = languageFromUrl || languageOfBrowser;
      this.translate.use(
        lang.includes('ru') || lang.includes('am') ? lang : 'am'
      );
    }
  }

  prepareRoute(outlet: RouterOutlet): string {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData.animationState
    );
  }
}
