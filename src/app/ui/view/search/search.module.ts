import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MaterialModule } from 'src/app/commons/material/material.module';
import { LoaderModule, SelectModule } from 'src/app/commons/components';
import { AthleteService } from 'src/app/data/services/athlete.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotImageDirective } from 'src/app/core/directives/not-image.directive';
import { InterceptorInterceptor } from 'src/app/core/interceptors/interceptor.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SearchComponent, NotImageDirective],
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SelectModule,
    LoaderModule,
  ],
  exports: [SearchComponent, NotImageDirective],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true,
  }, AthleteService]
})
export class SearchModule { }
