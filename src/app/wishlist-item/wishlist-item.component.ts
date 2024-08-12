import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItems';
import events from './../../shared/services/eventServices'

@Component({
  selector: 'wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() wish! : WishItem;
  /*@Input() fullfilled! : boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>();
  get cssClass() {
   //return this.fullfilled ? ['strikeout', 'text-gray-200']: [];
   return {'strikeout' : this.fullfilled, 'text-gray-200' : this.fullfilled}
  }*/

  get cssClass() {
  return {'strikeout text-muted' : this.wish.isComplete};
  }

  constructor() { }

  ngOnInit(): void {
  }

  removeWish() {
    events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
