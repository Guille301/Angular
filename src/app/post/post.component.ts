import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Post } from './post.model';
import { Comment } from './comment.model';

@Component({
  selector: 'app-post',
  imports: [CommonModule, RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  commentsMap: { [key: number]: Comment[] } = {};
  comments: Comment[] = [];

  constructor(private dataService: DataService) { }

 ngOnInit(): void {
  this.dataService.getPosts(10).subscribe(posts => {
    this.posts = posts;

    posts.forEach(post => {
      this.dataService.getComments(post.id)
        .subscribe(comments => {
          this.commentsMap[post.id] = comments;
        });
    });
  });
}

}
