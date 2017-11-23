import { AppService } from './app.service';
import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';

import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pivotGridDataSource: any;
  showTotalsPrior = false;
  rowsDataFieldArea = false;
  treeHeaderLayout = true;

  constructor(service: AppService) {
    this.pivotGridDataSource = {
      fields: [{
        caption: 'Region',
        dataField: 'region',
        expanded: true,
        area: 'row'
      }, {
        caption: 'Country',
        dataField: 'country',
        expanded: true,
        area: 'row'
      }, {
        caption: 'City',
        dataField: 'city',
        area: 'row'
      }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column'
      }, {
        caption: 'Sales',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        format: 'currency',
        area: 'data'
      }, {
        caption: 'Percent',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        summaryDisplayMode: 'percentOfRowGrandTotal',
        area: 'data'
      }],
      store: service.getSales()
    };
  }

  cellPrepared(e) {
    // e.cellElement.css('background-color', '#99a8a1');
    // e.element.css('background-color', '#99a8a1');
    console.log(e);
    if (e.area === 'data') {
    
      let dataField: any;
      dataField = e.component.getDataSource().getAreaFields('data')[e.cell.dataIndex];

      if (dataField.caption === 'Percent') { // && e.cell.value > 0 && e.cell.rowType === 'D') {
        e.cellElement.bgColor = '#99a8a1';
        
        // console.log(dataField);
      }

      //   var yTDColIndex = e.component.getDataSource().field("Var YTD").areaIndex;
      //   if(yTDColIndex == e.cell.dataIndex && e.cell.value > 0 && e.cell.rowType == "D"){
      //         e.cellElement.css("background-color", "green");
      //   }
    }
  }
}
