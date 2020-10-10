import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DataSourceChangedEventArgs,
  DataStateChangeEventArgs,
  EditSettingsModel,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';
import { ProductStoreService } from './product-store.service';

@Component({
  selector: 'app-root',
  template: ` <ejs-grid
    [dataSource]="products | async"
    [editSettings]="editSettings"
    (dataStateChanged)="dataStateChanged($event)"
    (dataSourceChanged)="dataSourceChanged($event)"
    [toolbar]="toolbar"
  >
    <e-columns>
      <e-column field="id" headerText="ID" isPrimaryKey="true"> </e-column>
      <e-column field="name" headerText="Name"> </e-column>
      <e-column field="location" headerText="Location"> </e-column>
      <e-column field="contact" headerText="Contact"> </e-column>
    </e-columns>
  </ejs-grid>`,
  // templateUrl: './app.component.html'
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angrid';
  public products: Observable<DataStateChangeEventArgs>;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];

  constructor(private productService: ProductStoreService) {
    this.products = productService;
  }
  ngOnInit() {
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
      newRowPosition: 'Bottom',
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const state: any = { skip: 0, take: 20 };
    this.productService.execute(state);
  }

  public dataStateChanged(state: DataStateChangeEventArgs): void {
    this.productService.execute(state);
  }

  public dataSourceChanged(state: DataSourceChangedEventArgs): void {
    if (state.action === 'add') {
      this.productService.addRecord(state).subscribe(() => {
        state.endEdit();
      });
    } else if (state.action === 'edit') {
      this.productService.updateRecord(state).subscribe(() => {
        state.endEdit();
      });
    } else if (state.requestType == 'delete') {
      this.productService.deleteRecord(state).subscribe(() => {
        state.endEdit();
      });
    }
  }
}
