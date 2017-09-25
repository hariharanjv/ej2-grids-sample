import { Component, OnInit, ViewChild } from '@angular/core';
import { gridData } from './data';
import { Grid } from '@syncfusion/ej2-grids';
import { PageService } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'my-app',
    template: `
    <ej-grid #grid [dataSource]='data' allowPaging='true' [pageSettings]='pageSettings'>
        <e-columns>
            <e-column field ='Country' headerText='Country' width='150'>
                <ng-template #template let-data>
                    <a href="#">{{data.Country}}</a>
                </ng-template>
            </e-column>
            <e-column field='EmployeeID' headerText='Employee ID' width='125' textAling='right'></e-column>
            <e-column field='FirstName' headerText='Name' width='120'></e-column>
            <e-column field='Title' headerText='Title' width='170'></e-column>      
        </e-columns>
    </ej-grid>`,
    providers: [PageService]
})

export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid: Grid;
    public data: Object[];
    public pageSettings: Object;
    public columns;

    public ngOnInit(): void {
        this.data = gridData;
        this.pageSettings = { pageCount: 5 };       
    }   
}
