import { Component, OnInit, ViewChild } from '@angular/core';
import { gridData1 } from './data';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons'
import { GridComponent, ToolbarService, EditService, PageService } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'my-app',
    template: `  
    <ej-grid #grid [dataSource]='data' allowPaging='true' [pageSettings]='pageSettings' [editSettings]='editSettings' [toolbar]='toolbar'>    
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' [visible]='true' width='120' textAlign="right" isPrimaryKey='true' [validationRules]='orderidrules'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='120' [validationRules]='customeridrules'></e-column>
            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="right" editType='numericedit' [validationRules]='freightrules'></e-column>
            <e-column field='ShipName' headerText='Ship Name' width='170'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' [edit]='editparams'></e-column>
        </e-columns>
    </ej-grid>
                `,
    providers: [ ToolbarService, EditService, PageService]
})
export class AppComponent implements OnInit {

    public data: Object[];
    public index: number;
    public editSettings: Object;
    public toolbar: any;

    @ViewChild('grid')
    public grid: GridComponent;
   
    ngOnInit(): void {
        this.data = gridData1;        
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'inline' };        
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel', 'Custom Text', { text: 'Custom Item Model', tooltipText: 'Custom Item Model', id: 'custom' }];
    }     
}
