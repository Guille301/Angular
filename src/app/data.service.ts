import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post/post.model';
import { Comment } from './post/comment.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  getUser(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/`+id);
  }

getPosts(limit: number = 10) {
  return this.http.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
}

  getComments(id: number) {
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=`+id);
  }

}
