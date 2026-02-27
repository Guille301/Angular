import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { Photo } from './photo.model';
import { Album } from './album.model';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent implements OnInit {

  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {

    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.dataService.getPhotosByAlbumId(this.albumId)
      .subscribe(photos => {
        this.photos = photos;
      });
  }

}