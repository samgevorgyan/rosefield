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
    this.titleService.setTitle('Jungle Sweets home');
    this.metaService.addTag({
      name: 'og:url',
      content: 'https://www.rosefield.am/am/home',
    });
  }
}
