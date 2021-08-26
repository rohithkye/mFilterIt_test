import {Component, OnInit, Renderer2} from '@angular/core';
import {BlogPost} from "../types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  blogPosts: BlogPost[];

  ngOnInit() {
    this.blogPosts = [...BLOG_POSTS].map((blogPost, index) => {
      blogPost.id = index + 1;
      blogPost.image = `/assets/images/blog-posts/img-${index + 1}.png`;
      blogPost.created_at = blogPost.created_at * 1000;
      return blogPost;
    });
  }

  applyTheme(value: any) {

  }


}


export const BLOG_POSTS: BlogPost[] = [
  {
    "title": "A Message to Our Customers",
    "url": "http://www.apple.com/customer-letter/",
    "author": "epaga",
    "num_comments": 967,
    "created_at": 1455698317
  },
  {
    "title": "“Was isolated from 1999 to 2006 with a 486. Built my own late 80s OS”",
    "url": "http://imgur.com/gallery/hRf2trV",
    "author": "epaga",
    "num_comments": 265,
    "created_at": 1418517626
  },
  {
    "title": "Apple’s declining software quality",
    "url": "http://sudophilosophical.com/2016/02/04/apples-declining-software-quality/",
    "author": "epaga",
    "num_comments": 705,
    "created_at": 1454596037
  },
  {
    "title": "F.C.C. Repeals Net Neutrality Rules",
    "url": null,
    "author": "patricktomas",
    "num_comments": 376,
    "created_at": 1317858143
  },
  {
    "title": "Google Is Eating Our Mail",
    "url": "https://www.tablix.org/~avian/blog/archives/2019/04/google_is_eating_our_mail/",
    "author": "saintamh",
    "num_comments": 685,
    "created_at": 1556274921
  },
  {
    "title": "Why I’m Suing the US Government",
    "url": "https://www.bunniestudios.com/blog/?p=4782",
    "author": "saintamh",
    "num_comments": 305,
    "created_at": 1469106658
  },
  {
    "title": "F.C.C. Repeals Net Neutrality Rules",
    "url": "https://www.nytimes.com/2017/12/14/technology/net-neutrality-repeal-vote.html",
    "author": "panny",
    "num_comments": 1397,
    "created_at": 1513275215
  },
  {
    "title": "Show HN: This up votes itself",
    "url": "http://news.ycombinator.com/vote?for=3742902&dir=up&whence=%6e%65%77%65%73%74",
    "author": "olalonde",
    "num_comments": 83,
    "created_at": 1332463239
  },
];
