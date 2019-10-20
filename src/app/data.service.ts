import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http_client : HttpClient) { 

  }

  getData(){
    return this.http_client.get("https://jsonplaceholder.typicode.com/posts");
  }
}
