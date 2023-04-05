import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl='http://localhost:3005/myProducts'

  constructor(private client:HttpClient) { }
  getAllProducts(){
    return this.client.get(this.baseUrl)
  }
  editProduct(body:any){
    return this.client.put(this.baseUrl,body)
  }
  addProduct(product:any){
    return this.client.post(this.baseUrl,product)
  }
  deleteProduct(productId:any){
    return this.client.delete(`${this.baseUrl}/${productId}`)
  }
}
