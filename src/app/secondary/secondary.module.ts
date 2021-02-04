import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryRoutingModule } from './secondary-routing.module';
import { SecondaryComponent } from './secondary.component';


@NgModule({
  declarations: [SecondaryComponent],
  imports: [
    CommonModule,
    SecondaryRoutingModule
  ]
})
export class SecondaryModule { }
