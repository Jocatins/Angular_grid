import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';
import { ProductStoreService } from './product-store.service';

@Component({
  selector: 'app-root',
  template: ` <ejs-grid [dataSource]="products | async"> </ejs-grid>`,
  // templateUrl: './app.component.html'
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angrid';
  public products: Observable<DataStateChangeEventArgs>;

  constructor(private productService: ProductStoreService) {
    this.products = productService;
  }
  ngOnInit() {
    const state: any = { skip: 0, take: 5 };
    this.productService.execute(state);
  }
}
