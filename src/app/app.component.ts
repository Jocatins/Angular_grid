import { Component } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  template: `<ejs-grid
    [allowSorting]="true"
    [allowGrouping]="true"
    [allowFiltering]="true"
    [dataSource]="data"
    [allowPaging]="true"
    [pageSettings]="pageSettings"
  >
    <e-columns>
      <e-column field="ProdId" headerText="ORDER ID"></e-column>
      <e-column field="CompanyName" headerText="Company Name"></e-column>
      <e-column field="Products" headerText="Products"></e-column>
    </e-columns>
  </ejs-grid>`,
  // templateUrl: './app.component.html'
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angrid';
  public pageSettings: PageSettingsModel = { pageSize: 2 };
  public data: object[] = [
    {
      ProdId: 1,
      CompanyName: 'Total',
      Products: 'Oil',
    },
    {
      ProdId: 2,
      CompanyName: 'Shell',
      Products: 'Oil',
    },
    {
      ProdId: 3,
      CompanyName: 'TeqBridge',
      Products: 'Software',
    },
  ];
}
