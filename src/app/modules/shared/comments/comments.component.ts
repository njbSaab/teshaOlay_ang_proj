import { Component, Input } from '@angular/core';
import { CommentInterface } from '../card-food/interfaces/comment-interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  @Input() commentData: CommentInterface | undefined;
}
