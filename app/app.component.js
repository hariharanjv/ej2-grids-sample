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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = data_1.data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
    };
    AppComponent.prototype.beginEdit = function (e) {
        if (e.requestType === 'beginEdit' || e.requestType === 'add') {
            e.row.querySelector(".e-checkbox-wrapper").classList.add("e-small");
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        template: "<ej-grid [dataSource]='data' [editSettings]='editSettings' (actionComplete)='beginEdit($event)' [toolbar]='toolbar' height='273px'>\n                <e-columns>\n                    <e-column field='OrderID' headerText='Order ID' textAlign='right' isPrimaryKey='true' width=100></e-column>\n                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>\n                   <e-column field='EmployeeID' displayAsCheckBox='true' type='boolean' editType='booleanedit' width= 50></e-column>\n                </e-columns>\n                </ej-grid>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
