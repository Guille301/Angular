import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  
  user$: any;

  constructor(private dataService: DataService, private route: ActivatedRoute){
    this.route.params.subscribe(params => this.user$ = params['id']);
  }

  ngOnInit() {
    this.dataService.getUser(this.user$).subscribe(data => {
      this.user$ = data;
    });
  }

}
