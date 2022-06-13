import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule, LoaderModule } from 'src/app/commons/components';
import { MaterialModule } from 'src/app/commons/material/material.module';
import { SearchModule } from '../search/search.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HeaderModule,
    SearchModule,
    LoaderModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
