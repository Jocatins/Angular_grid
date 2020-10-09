import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { ProductDataService } from './product-data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    HttpClientModule,
    PagerModule,
    InMemoryWebApiModule.forRoot(ProductDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
