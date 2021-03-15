import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.setTitleMeta();
  }

  setTitleMeta(): void {
    this.titleService.setTitle('RoseField checkout');
    this.metaService.addTags([
      {
        name: 'og:url',
        content: 'https://www.rosefield.am/ru/checkout',
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
