import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post/post.model';
import { Comment } from './post/comment.model';
import { Photo } from './album/photo.model';
import { Album } from './album/album.model';
import { User } from './users/user.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  
  getUser(id: number) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getPosts(limit: number = 10) {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  }

  getComments(id: number) {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=`+id);
  }

  getAlbumsByUser(userId: number) {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  }

  getPhotosByAlbumId(albumId: number) {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

}
