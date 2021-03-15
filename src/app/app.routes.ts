import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((mod) => mod.HomeModule),
    data: { animationState: 'home' },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((mod) => mod.AboutModule),
    data: { animationState: 'about' },
  },
  {
    path: 'ceo',
    loadChildren: () =>
      import('./modules/ceo/ceo.module').then((mod) => mod.CeoModule),
    data: { animationState: 'ceo' },
  },
  {
    path: 'roses',
    loadChildren: () =>
      import('./modules/roses/roses.module').then((mod) => mod.RosesModule),
    data: { animationState: 'roses' },
  },
  {
    path: 'partners',
    loadChildren: () =>
      import('./modules/partners/partners.module').then(
        (mod) => mod.PartnersModule
      ),
    data: { animationState: 'partners' },
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./modules/checkout/checkout.module').then(
        (mod) => mod.CheckoutModule
      ),
    data: { animationState: 'contacts' },
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./modules/contacts/contacts.module').then(
        (mod) => mod.ContactsModule
      ),
    data: { animationState: 'contacts' },
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
