import { Component, OnInit } from '@angular/core';
import { AddprogressService } from './addprogress.service';

@Component({
  selector: 'app-addprogress',
  templateUrl: './addprogress.component.html',
  styleUrls: ['./addprogress.component.scss'],
})

export class AddprogressComponent implements OnInit {
    public extradetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        persondaily_progress: '',
    }

    constructor (
        private addprogressService: AddprogressService,
    ) { }

    ngOnInit() {
        this.extradetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}