import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list-posts',
  imports: [ HttpClientModule, NgFor, CommonModule ],
  templateUrl: './list-posts.html',
  styleUrl: './list-posts.scss',
})
export class ListPosts {
  posts?: Post[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('https://localhost:7286/api/Post/list').subscribe({
      next: (data: Post[]) => {
        this.posts = data;
        console.log(this.posts);
      }
    });
  }

}
