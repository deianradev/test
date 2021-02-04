import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcRoutingModule } from './abc-routing.module';
import { AbcComponent } from './abc.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [AbcComponent, TestComponent],
  imports: [
    CommonModule,
    AbcRoutingModule
  ]
})
export class AbcModule { }
