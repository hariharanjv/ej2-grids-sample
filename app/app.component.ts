import { Component, OnInit, ViewChild } from '@angular/core';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { gridData } from './data';
import { Grid, EditEventArgs, Column } from '@syncfusion/ej2-grids';
import { PageService, EditService, ToolbarService, IEditCell } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'my-app',
    template: `
    <ej-grid [dataSource]='data' #grid allowPaging='true' [editSettings]='editSettings' [toolbar]='toolbar'>
    <e-columns>
        <e-column field='id' headerText='ID' width='120' textAlign="right" isPrimaryKey='true'></e-column>
        <e-column field='val1' headerText='Value1' editType= 'numericedit' [edit]='numParams' textAlign="right" width='120'></e-column>        
        <e-column field='val1' headerText='Value1' textAlign="right" width='120'></e-column>        
    </e-columns>
    </ej-grid>`,
    providers: [PageService, EditService, ToolbarService]
})

export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid: Grid;
    public data: Object[];
    public editSettings: Object;
    public toolbar: string[];    
    public elem: HTMLElement;
    public numericObj: NumericTextBox;
    public numParams: IEditCell;
    public onFocusIn: any;

    public ngOnInit(): void {        
        this.data = [{ id: 1, val1: 1, val2: 3, amt: 4, defaultValue: 'default' }, { id: 2, val1: 4, val2: 3, amt: 7, defaultValue: 'default' }],
            this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];

        this.onFocusIn = (e)=>{ //numeric textbox focusin
            this.numericObj.element.value= this.numericObj.value.toFixed(2).toString(); //2 decimal places
        }

        this.numParams = {
            create: () => {
                this.elem = document.createElement('input');
                return this.elem;
            },
            read: () => {
                return this.numericObj.value;
            },
            destroy: () => {
                this.numericObj.element.removeEventListener("focus", this.onFocusIn);
                this.numericObj.destroy();
            },
            write: (args: { rowData: Object, column: Column }) => {
                this.numericObj = new NumericTextBox({
                    format: "0.00",
                    value: args.rowData[args.column.field],
                    floatLabelType: 'Never',
                    decimals: 2,
                    change: this.onFocusIn //value change event
                });
                this.numericObj.appendTo(this.elem);
                this.numericObj.element.addEventListener("focus", this.onFocusIn);
            }
        };
    }
}
