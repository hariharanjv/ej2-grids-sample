import { Component, OnInit } from '@angular/core';
import { OrderData } from './data';
import { ToolbarItem } from '@syncfusion/ej2-grids';

@Component({
  selector: 'my-app',
  template: ` <ej-grid #grid [dataSource]='data'  height='350px' [editSettings]='editSetting' [toolbar]='items'>
                <e-columns>
                    <e-column field='OrderID' isPrimaryKey='true' headerText='Order ID' textAlign='right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150 [validationRules]='validationRules'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ej-grid>`
})
export class AppComponent implements OnInit {

  public data: Object[];
  public editSetting: Object;
  public validationRules: Object;
  public items: ToolbarItem[];


  ngOnInit(): void {
    this.data = OrderData;
    this.items = [ToolbarItem.Add, ToolbarItem.Edit, ToolbarItem.Delete, ToolbarItem.Update, ToolbarItem.Cancel];
    this.validationRules = { required: true };
    this.editSetting = { allowEditing: true, allowDeleting: true, allowAdding: true };
  }
}
