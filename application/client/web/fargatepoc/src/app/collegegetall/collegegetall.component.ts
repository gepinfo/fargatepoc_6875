import { Component, OnInit } from '@angular/core';
import { CollegegetallService } from './collegegetall.service';

@Component({
  selector: 'app-collegegetall',
  templateUrl: './collegegetall.component.html',
  styleUrls: ['./collegegetall.component.scss'],
})

export class CollegegetallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'roll', field: 'rollno'  },{ headerName: 'name', field: 'name'  },{ headerName: 'email', field: 'email'  },{ headerName: 'age', field: 'age'  },];
    public collegedata:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        rollno: '',
        name: '',
        email: '',
        age: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private collegegetallService: CollegegetallService,
    ) { }

    ngOnInit() {
        this.collegedata.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.collegegetallService.GpGetAllValues().subscribe(data => {
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