import { Component, Input } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { PostService } from '../Services/post.service';
import { CommonModule, NgFor } from '@angular/common';


PostService

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent,CommonModule,NgFor],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  title: string = 'List of Posts';
  messageFromPost: string = 'This is directly from Post Component';
  messageFromChild: string = 'From Child Component (Post)';

  @Input() message: string = '';

  posts : Array <any> = [];
  constructor(private postService : PostService){
    // let postService = new PostService();
    this.posts = postService.postList;
  }
}
