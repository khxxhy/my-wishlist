import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItems';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('get coffee'),
    new WishItem('shower'),
    new WishItem('love', true),
    new WishItem('learn angular')
  ];

  filter: any;
};