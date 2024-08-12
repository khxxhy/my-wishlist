import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItems';
import { EventService } from './../shared/services/eventServices';
import "./app.component.css"
import { WishService } from './wish.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items!: WishItem[];

  constructor(events: EventService, private WishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })

  }
  ngOnInit(): void {
    this.WishService.getWishes().subscribe((data: any) => {
      this.items = data;
    })
  }

  filter: any;
};