import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

mobiles = ["a","b","c"]
  constructor(private _http:HttpClient) { }

  getData(){
    this._http.get("http://fakestoreapi.com/products").subscribe((data)=>{
      console.log(data)
    })
  }
}
