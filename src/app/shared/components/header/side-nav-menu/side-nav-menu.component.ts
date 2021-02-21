import { LanguageService } from 'src/app/shared/services/language.service';

import { Component, Input, OnInit } from '@angular/core';
import { languageList } from 'src/app/utils/language.list';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss'],
})
export class SideNavMenuComponent implements OnInit {
  languageFromUrl$ = this.languageService.languageFromUrl$;

  showConfigMenu = false;
  showLanguageList = false;
  languageList = languageList;

  constructor(
    private languageService: LanguageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {}

  openConfigMenu(): void {
    this.showConfigMenu = !this.showConfigMenu;
  }

  openLanguageList(): void {
    this.showLanguageList = !this.showLanguageList;
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.languageService.changeLanguage(lang);
    this.languageService.emitLanguageChange(lang);
  }
}
