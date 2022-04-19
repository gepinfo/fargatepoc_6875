import { Component, OnInit } from '@angular/core';
import { GetalldeatilsService } from './getalldeatils.service';

@Component({
  selector: 'app-getalldeatils',
  templateUrl: './getalldeatils.component.html',
  styleUrls: ['./getalldeatils.component.scss'],
})

export class GetalldeatilsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'age', field: 'age'  },];
    public studentdata:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private getalldeatilsService: GetalldeatilsService,
    ) { }

    ngOnInit() {
        this.studentdata.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getalldeatilsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}