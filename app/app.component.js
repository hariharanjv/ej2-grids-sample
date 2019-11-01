"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = data_1.gridData1;
        this.items = [ej2_grids_1.ToolbarItem.Add, ej2_grids_1.ToolbarItem.Edit, ej2_grids_1.ToolbarItem.Delete, ej2_grids_1.ToolbarItem.Update, ej2_grids_1.ToolbarItem.Cancel];
        this.validationRules = { required: true };
        this.editSetting = { allowEditing: true, allowDeleting: true, allowAdding: true };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " <ej-grid #grid [dataSource]='data'  height='350px' [editSettings]='editSetting' [toolbar]='items'>\n                <e-columns>\n                    <e-column field='OrderID' isPrimaryKey='true' headerText='Order ID' textAlign='right' width=120></e-column>\n                    <e-column field='CustomerID' headerText='Customer ID' width=150 [validationRules]='validationRules'></e-column>\n                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>\n                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>\n                </e-columns>\n                </ej-grid>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
