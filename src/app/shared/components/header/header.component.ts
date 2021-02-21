import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { languageList } from 'src/app/utils/language.list';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import {
  LocalizedRouter,
  LocalizeRouterService,
} from '@gilsdav/ngx-translate-router';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  languageList = languageList;
  languageFromUrl$ = this.languageService.languageFromUrl$;
  isMenuOpend = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      tap(console.log),
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private breakpointObserver: BreakpointObserver,
    private localize: LocalizeRouterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.languageFromUrl$.subscribe((lang: string) => {
      this.setSelectedLanguage(lang);
    });
  }
  NavigateByUrl(url: string): void {
    const urlToNavigate: any = this.localize.translateRoute(url);
    this.router.navigate([urlToNavigate]);
  }

  setSelectedLanguage(lang: string): void {
    this.languageList.forEach((key) => {
      if (key.name === lang) {
        key.selected = true;
      } else {
        key.selected = false;
      }
    });
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.languageService.changeLanguage(lang);
    this.languageService.emitLanguageChange(lang);
    this.setSelectedLanguage(lang);
  }
}
