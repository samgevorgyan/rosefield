import { LanguageService } from 'src/app/shared/services/language.service';

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { languageList } from 'src/app/utils/language.list';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss'],
})
export class SideNavMenuComponent implements OnInit {
  showLanguageList = false;
  languageList = languageList;

  constructor(
    private languageService: LanguageService,
    private localize: LocalizeRouterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  navigateByUrl(url: string): void {
    const urlToNavigate: any = this.localize.translateRoute(url);
    this.router.navigate([urlToNavigate]);
  }
  changeLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
    this.languageService.emitLanguageChange(lang);
    this.showLanguageList = !this.showLanguageList;
  }

  openLanguageList(): void {
    this.showLanguageList = !this.showLanguageList;
  }
}
