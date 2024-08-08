import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItems';
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

  listFilter: string = "0";

  newWishText = " ";

  title = 'my-wishlist';

  visibleItems : WishItem[] = this.items;

  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText="";
  }

  filterChanged(value : any) {
   if(value === '0') {
    this.visibleItems = this.items;
   }
   else if (value === '1') {
    this.visibleItems = this.items.filter(item => !item.isComplete);
   }
   else if (value === '2') {
    this.visibleItems = this.items.filter(item => item.isComplete);
   }
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item)
  }
}
