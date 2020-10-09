import { Component } from '@angular/core';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

class NewSerialAdaptor extends ODataV4Adaptor {
  processResponse() {
    let i = 0;
    const Sno = 'Sno';
    //calling base class process response function
    const original = super.processResponse.apply(this, arguments);
    // adding serial number
    original.result.forEach((item) => (item[Sno] = ++i));
    return { result: original.result, count: original.count };
  }
}
@Component({
  selector: 'app-root',
  template: `<ejs-grid [dataSource]="data" [query]="param">
    <e-columns>
      <e-column field="Sno" headerText="SNO"></e-column>
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
  public data: DataManager = new DataManager({
    url: 'https://services.odata.org/v4/northwind/northwind.svc/Orders/?$top=7',
    adaptor: new NewSerialAdaptor(),
  });
  public param: Query = new Query().addParams('Status', 'Closed');
}
