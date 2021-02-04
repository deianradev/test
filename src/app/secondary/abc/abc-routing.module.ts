import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbcComponent } from './abc.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: AbcComponent,
    children: [
      {
        path: '',
        component: TestComponent,
        outlet: 'aux',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbcRoutingModule {}
