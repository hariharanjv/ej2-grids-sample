import { Component, OnInit, ViewChild } from '@angular/core';
import { gridData } from './data';
import { Grid, EditEventArgs, Column } from '@syncfusion/ej2-grids';
import { PageService, EditService, ToolbarService } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'my-app',
    template: `
    <ej-grid [dataSource]='data' #grid allowPaging='true' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)" [editSettings]='editSettings' [toolbar]='toolbar'>
    <e-columns>
        <e-column field='id' headerText='ID' width='120' textAlign="right" isPrimaryKey='true'></e-column>
        <e-column field='val1' headerText='Value1' textAlign="right" width='120'></e-column>
        <e-column field='val2' headerText='Value2' width='120' textAlign="right"></e-column>
        <e-column field='amt' headerText='Amount' textAlign="right" width='170'></e-column>
        <e-column field='defaultValue' headerText='Default value' width='150' defaultValue='default value changed'></e-column>
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
    public editparams: Object;
    public tr: HTMLTableRowElement;
    public eventListerner: EventListenerObject;

    public onChange(): void {
        let valElement1: HTMLInputElement = this.tr.querySelector('#' + (this.grid.columns[1] as Column).field) as HTMLInputElement;
        let valElement2: HTMLInputElement = this.tr.querySelector('#' + (this.grid.columns[2] as Column).field) as HTMLInputElement;
        let amountElement: HTMLInputElement = this.tr.querySelector('#' + (this.grid.columns[3] as Column).field) as HTMLInputElement;

        //value1 and value 2 sum stored on amount 
        amountElement.value = ((valElement1.value === '' ? 0 : parseInt(valElement1.value, 10)) + (valElement2.value === '' ? 0 : parseInt(valElement2.value, 10))).toString();
    }

    public setEditRow() {
        //set the current edit row
        this.tr = this.grid.element.querySelector('.e-editedrow') as HTMLTableRowElement;
        if (!this.tr) {
            this.tr = this.grid.element.querySelector('.e-addedrow') as HTMLTableRowElement;
        }
    }

    public actionBegin(args: EditEventArgs): void {
        this.setEditRow();
        //unwire keyup event on save action
        if (args.requestType === 'save') {
            this.tr.removeEventListener('keyup', this.eventListerner);
        }
    }

    public actionComplete(args: EditEventArgs): void {
        this.setEditRow();
        //wire keyup event on edit or add start action
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.tr.addEventListener('keyup', this.eventListerner);
        }
    }

    public ngOnInit(): void {
        this.eventListerner = this.onChange.bind(this);
        this.data = [{ id: 1, val1: 1, val2: 3, amt: 4, defaultValue: 'default' }, { id: 2, val1: 4, val2: 3, amt: 7, defaultValue: 'default' }],
            this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
    }
}
