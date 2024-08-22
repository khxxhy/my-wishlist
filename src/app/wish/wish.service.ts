import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from 'src/shared/models/wishItems';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
  }

  getWishes() { 
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })

    return this.http.get('assets/wish.json', options).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      console.log('There is an issue with the client or network:', error.error)
    }
    else{
      console.log('Server side error:', error.error)
    }
    return throwError(() => new Error ("Cannot retrieve wishes from server. Please try again."))
  }
  
  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authorization', 'value-need-for-authorization');
    this.http.post('assets/wish.json', wish, options);
  }
}
