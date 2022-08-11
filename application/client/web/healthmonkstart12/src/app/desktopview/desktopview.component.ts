import { Component, OnInit } from '@angular/core';
import { DesktopviewService } from './desktopview.service';

@Component({
  selector: 'app-desktopview',
  templateUrl: './desktopview.component.html',
  styleUrls: ['./desktopview.component.scss'],
})

export class DesktopviewComponent implements OnInit {
    public adminentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Enter_Name: '',
    }

    constructor (
        private desktopviewService: DesktopviewService,
    ) { }

    ngOnInit() {
        this.adminentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}