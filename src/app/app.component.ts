import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItems';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('be happy'),
    new WishItem('communicate'),
    new WishItem('love', true),
    new WishItem('learn angular')
  ];

  listFilter: any = '0';

  newWishText = '';

  title = 'my-wishlist';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item)
  }
};