import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondaryComponent } from './secondary.component';

const routes: Routes = [
  {
    path: '',
    component: SecondaryComponent,
    children: [
      { path: '', redirectTo: 'abc', pathMatch: 'full' },
      {
        path: 'abc',
        loadChildren: () => import('./abc/abc.module').then((m) => m.AbcModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondaryRoutingModule {}
