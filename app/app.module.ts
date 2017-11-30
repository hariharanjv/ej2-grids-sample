import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule,SelectionService, PageService, SortService, FilterService, ToolbarService, EditService } from '@syncfusion/ej2-ng-grids';
import { ButtonModule } from '@syncfusion/ej2-ng-buttons';
import { ToolbarModule } from '@syncfusion/ej2-ng-navigations';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, GridModule, ButtonModule, ToolbarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PageService, SelectionService, SortService, ToolbarService, FilterService, EditService]
})
export class AppModule { }
