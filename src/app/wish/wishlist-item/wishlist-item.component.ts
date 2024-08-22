import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItems';
import {EventService} from './../../../shared/services/eventServices'

@Component({
  selector: 'wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() wish! : WishItem;
 
  get cssClass() {
  return {'strikeout text-muted' : this.wish.isComplete};
  }

  constructor(private events: EventService)
   { }

  ngOnInit(): void {
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
