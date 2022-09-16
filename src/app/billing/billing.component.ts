import { Component, OnInit } from '@angular/core';
import { BillingService } from 'app/billingservice';


declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  public PDFGen(index: number){
    console.log("PDF of bill " + this._citaBilling.getFactura()[index][0]);
    alert("Se ha descargado el PDF");
  }

  public tableData1: TableData;

  constructor(public _citaBilling:BillingService) { }

  ngOnInit() {
    this.tableData1 = this._citaBilling.getTable();
  }

}
