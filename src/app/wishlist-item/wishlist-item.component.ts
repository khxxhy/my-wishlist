import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItems';
import events from './../../shared/services/eventServices'

@Component({
  selector: 'wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() wishText! : string;
  @Input() fullfilled! : boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>();
  get cssClass() {
   return this.fullfilled ? ['strikeout', 'text-gray-200']: [];
   //return {'strikeout' : this.fullfilled, 'text-gray-200' : this.fullfilled}
  }

  constructor() { }

  ngOnInit(): void {
  }

  removeWish() {
    events.emit('removeWish', this.wishText);
  }

  toggleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
