import { Component, OnInit } from '@angular/core';
import { CreatecollegedataService } from './createcollegedata.service';

@Component({
  selector: 'app-createcollegedata',
  templateUrl: './createcollegedata.component.html',
  styleUrls: ['./createcollegedata.component.scss'],
})

export class CreatecollegedataComponent implements OnInit {
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

    constructor (
        private createcollegedataService: CreatecollegedataService,
    ) { }

    ngOnInit() {
        this.collegedata.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createcollegedataService.GpCreate(this.collegedata).subscribe(data => {
            this.collegedata.rollno = ''
 	 	this.collegedata.name = ''
 	 	this.collegedata.email = ''
 	 	this.collegedata.age = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}