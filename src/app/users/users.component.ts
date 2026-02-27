import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Album } from '../album/album.model';
import { User } from './user.model';


@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  albumsMap: { [userId: number]: Album[] } = {};

  constructor(private dataService: DataService){}

ngOnInit(): void {
  this.dataService.getUsers().subscribe(users => {
    this.users = users;

    users.forEach(users$ => {
      this.dataService.getAlbumsByUser(users$.id)
        .subscribe(albums => {
          this.albumsMap[users$.id] = albums;
        });
    });
  });
}


scrollLeft(userId: number) {
  const container = document.querySelector(
    `[data-user='${userId}']`
  ) as HTMLElement;

  container?.scrollBy({ left: -300, behavior: 'smooth' });
}

scrollRight(userId: number) {
  const container = document.querySelector(
    `[data-user='${userId}']`
  ) as HTMLElement;

  container?.scrollBy({ left: 300, behavior: 'smooth' });
}

}
