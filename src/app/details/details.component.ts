import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { BackButtonComponent } from '../../shared/back-button/back-button.component';
import { User } from '../users/user.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  user!: User;        
  userId!: number;  

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    // 1️⃣ Obtener el id de la URL
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    // 2️⃣ Llamar al servicio con ese id
    this.dataService.getUser(this.userId).subscribe(data => {
      this.user = data;
    });
  }

}