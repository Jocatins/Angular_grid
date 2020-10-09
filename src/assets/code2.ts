// Ajax Binding

import { Component, ViewChild } from '@angular/core';

import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { Ajax } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: ` <input
      type="button"
      id="btn"
      (click)="newClick()"
      value="Click"
    />
    <ejs-grid #Grid>
      <e-columns>
        <e-column field="OrderID" headerText="ORDER ID"></e-column>
        <e-column field="ShippedDate" headerText="Shipped Date"></e-column>
        <e-column field="ShipCity" headerText="Ship City"></e-column>
      </e-columns>
    </ejs-grid>`,
  // templateUrl: './app.component.html'
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angrid';
  @ViewChild('Grid') public grid: GridComponent;

  newClick() {
    const grid = this.grid; //Instance of a grid
    const ajax = new Ajax(
      'https://ej2services.syncfusion.com/production/web-services/api/Orders',
      'GET'
    );
    ajax.send();
    ajax.onSuccess = (data: string) => {
      grid.dataSource = JSON.parse(data);
    };
  }
}
