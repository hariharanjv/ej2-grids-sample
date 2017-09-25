"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = data_1.gridData;
        this.pageSettings = { pageCount: 5 };
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('grid'),
    __metadata("design:type", ej2_grids_1.Grid)
], AppComponent.prototype, "grid", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <ej-grid #grid [dataSource]='data' allowPaging='true' [pageSettings]='pageSettings'>\n        <e-columns>\n            <e-column field ='Country' headerText='Country' width='150'>\n                <ng-template #template let-data>\n                    <a href=\"#\">{{data.Country}}</a>\n                </ng-template>\n            </e-column>\n            <e-column field='EmployeeID' headerText='Employee ID' width='125' textAling='right'></e-column>\n            <e-column field='FirstName' headerText='Name' width='120'></e-column>\n            <e-column field='Title' headerText='Title' width='170'></e-column>      \n        </e-columns>\n    </ej-grid>",
        providers: [ej2_ng_grids_1.PageService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
