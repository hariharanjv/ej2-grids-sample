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
var ej2_inputs_1 = require("@syncfusion/ej2-inputs");
var ej2_grids_1 = require("@syncfusion/ej2-grids");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = [{ id: 1, val1: 1, val2: 3, amt: 4, defaultValue: 'default' }, { id: 2, val1: 4, val2: 3, amt: 7, defaultValue: 'default' }],
            this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['add', 'edit', 'delete', 'update', 'cancel'];
        this.onFocusIn = function (e) {
            _this.numericObj.element.value = _this.numericObj.value.toFixed(2).toString(); //2 decimal places
        };
        this.numParams = {
            create: function () {
                _this.elem = document.createElement('input');
                return _this.elem;
            },
            read: function () {
                return _this.numericObj.value;
            },
            destroy: function () {
                _this.numericObj.element.removeEventListener("focus", _this.onFocusIn);
                _this.numericObj.destroy();
            },
            write: function (args) {
                _this.numericObj = new ej2_inputs_1.NumericTextBox({
                    format: "0.00",
                    value: args.rowData[args.column.field],
                    floatLabelType: 'Never',
                    decimals: 2,
                    change: _this.onFocusIn //value change event
                });
                _this.numericObj.appendTo(_this.elem);
                _this.numericObj.element.addEventListener("focus", _this.onFocusIn);
            }
        };
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
        template: "\n    <ej-grid [dataSource]='data' #grid allowPaging='true' [editSettings]='editSettings' [toolbar]='toolbar'>\n    <e-columns>\n        <e-column field='id' headerText='ID' width='120' textAlign=\"right\" isPrimaryKey='true'></e-column>\n        <e-column field='val1' headerText='Value1' defaultValue='0.00' editType= 'numericedit' [edit]='numParams' textAlign=\"right\" width='120'></e-column>        \n        <e-column field='val1' headerText='Value1' textAlign=\"right\" width='120'></e-column>        \n    </e-columns>\n    </ej-grid>",
        providers: [ej2_ng_grids_1.PageService, ej2_ng_grids_1.EditService, ej2_ng_grids_1.ToolbarService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
