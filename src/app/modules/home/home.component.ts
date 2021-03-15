import {
  AfterViewChecked,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewChecked {
  @ViewChild('video') video: ElementRef | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngAfterViewChecked(): void {
    this.setTitleMeta();
    if (isPlatformBrowser(this.platformId)) {
      if (this.video) {
        this.video.nativeElement.muted = true;
        this.video.nativeElement.play();
      }
    }
  }

  setTitleMeta(): void {
    this.titleService.setTitle('RoseField home');
    this.metaService.addTags([
      {
        name: 'og:url',
        content: 'https://www.rosefield.am/ru/home',
      },
      {
        name: 'og:type',
        content: 'article',
      },
      {
        name: 'og:title',
        content: 'WELCOME TO ROSEFIELD ',
      },
      {
        name: 'og:image',
        content:
          'https://rosefield.am/roses_background.8825175e0dfb71d6a5c7.svg',
      },
    ]);
  }
}
