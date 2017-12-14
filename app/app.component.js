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
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onChange = function () {
        var valElement1 = this.tr.querySelector('#' + this.grid.columns[1].field);
        var valElement2 = this.tr.querySelector('#' + this.grid.columns[2].field);
        var amountElement = this.tr.querySelector('#' + this.grid.columns[3].field);
        //value1 and value 2 sum stored on amount 
        amountElement.value = ((valElement1.value === '' ? 0 : parseInt(valElement1.value, 10)) + (valElement2.value === '' ? 0 : parseInt(valElement2.value, 10))).toString();
    };
    AppComponent.prototype.setEditRow = function () {
        this.tr = this.grid.element.querySelector('.e-editedrow');
        if (!this.tr) {
            this.tr = this.grid.element.querySelector('.e-addedrow');
        }
    };
    AppComponent.prototype.actionBegin = function (args) {
        this.setEditRow();
        if (args.requestType === 'save') {
            this.tr.removeEventListener('keyup', this.eventListerner);
        }
    };
    AppComponent.prototype.actionComplete = function (args) {
        this.setEditRow();
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            this.tr.addEventListener('keyup', this.eventListerner);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.eventListerner = this.onChange.bind(this);
        this.data = [{ id: 1, val1: 1, val2: 3, amt: 4, defaultValue: 'default' }, { id: 2, val1: 4, val2: 3, amt: 7, defaultValue: 'default' }],
            this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
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
        template: "\n    <ej-grid [dataSource]='data' #grid allowPaging='true' (actionBegin)=\"actionBegin($event)\" (actionComplete)=\"actionComplete($event)\" [editSettings]='editSettings' [toolbar]='toolbar'>\n    <e-columns>\n        <e-column field='id' headerText='ID' width='120' textAlign=\"right\" isPrimaryKey='true'></e-column>\n        <e-column field='val1' headerText='Value1' textAlign=\"right\" width='120'></e-column>\n        <e-column field='val2' headerText='Value2' width='120' textAlign=\"right\"></e-column>\n        <e-column field='amt' headerText='Amount' textAlign=\"right\" width='170'></e-column>\n        <e-column field='defaultValue' headerText='Default value' width='150' defaultValue='default value changed'></e-column>\n    </e-columns>\n    </ej-grid>",
        providers: [ej2_ng_grids_1.PageService, ej2_ng_grids_1.EditService, ej2_ng_grids_1.ToolbarService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
