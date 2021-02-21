import { Injectable } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language = '';
  private languageFromUrl = new BehaviorSubject<string>('');

  public languageFromUrl$ = this.languageFromUrl.asObservable();

  constructor(public localizeService: LocalizeRouterService) {
    this.setLanguageFromUrl();
  }

  setLanguageFromUrl(): void {
    this.language = this.localizeService.parser.currentLang
      ? this.localizeService.parser.currentLang
      : this.localizeService.parser.defaultLang;
    this.emitLanguageChange(this.language);
  }

  emitLanguageChange(lang: string): void {
    this.languageFromUrl.next(lang);
  }

  changeLanguage(lang: string): void {
    this.localizeService.changeLanguage(lang);
  }
}
