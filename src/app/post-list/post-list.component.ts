import { Component, Input } from '@angular/core';
import { PostService } from '../Services/post.service';
import { CommonModule, NgFor } from '@angular/common';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() newMessage: string = '';
  postLists: Array<any> = [];

  constructor(private postService: PostService) {
    this.postLists = postService.postList;
  }

  addNewData() {
    let newData : Post = {
      id: 6,
      postTitle: 'Post 6',
    };

    this.postService.addPost(newData);
    
  }
}
