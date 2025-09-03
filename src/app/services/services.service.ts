import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingFruit } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private path = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllFruits(): Observable<any> {
    console.log('getAllFruits:', this.path + "/Listy/get_fruits");
    return this.httpClient.get<any[]>(this.path + "/Listy/get_fruits");
  }

  editFruit(fruit: ShoppingFruit ): any {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.put(this.path + "/Fruits/Put", JSON.stringify(fruit), {headers: header})
  }

  createNewFruit(fruit: ShoppingFruit): any {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this.path + "/Fruits/Post", JSON.stringify(fruit), {headers: header})
  }

  deleteFruit(fruit: ShoppingFruit): any {
    return this.httpClient.delete(this.path + "/Fruits/Delete" + fruit.fruitId)
  }
}
