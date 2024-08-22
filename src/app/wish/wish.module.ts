import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishlistItemComponent } from './wishlist-item/wishlist-item.component';
import { WishComponent } from './wish.component';


@NgModule({
  declarations: [ 
    WishlistComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishlistItemComponent,
    WishComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    WishComponent
  ]
})

export class WishModule { }
