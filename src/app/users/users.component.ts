import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users$: any;

  constructor(private dataService: DataService){}

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      debugger;
      this.users$ = data;
    });
  }


}
