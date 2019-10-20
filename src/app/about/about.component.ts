import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  posts : Post[];

  constructor(private service : DataService) {
    service.getData().subscribe( data => {
      this.posts = data;
    })
  }

}
