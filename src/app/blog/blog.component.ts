import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from "../../types";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blogPosts: BlogPost[];


  ngOnInit() {
  }

}
