import { Component, OnInit } from '@angular/core';
import { data } from './data';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'app-container',
    template: `<ej-grid [dataSource]='data' [editSettings]='editSettings' (actionComplete)='beginEdit($event)' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                   <e-column field='EmployeeID' displayAsCheckBox='true' type='boolean' editType='booleanedit' width= 50></e-column>
                </e-columns>
                </ej-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
    }
    beginEdit(e) {
        if (e.requestType === 'beginEdit' || e.requestType === 'add') {
            e.row.querySelector(".e-checkbox-wrapper").classList.add("e-small");
        }

    }
}