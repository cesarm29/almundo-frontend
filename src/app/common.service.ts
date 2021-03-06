import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  //service to mysql get hotels all
  getHoteles(item){      
    return this.http.get('http://localhost:3100/hoteles/', item)  
            .map((response: Response) =>response.json())              
  }

  //service to mysql get hotels for name
  getHotelesForName(name){ 
    var body = "name=" + name ;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });     
    return this.http.post('http://localhost:3100/hotelesPorNombre/', body, options)  
            .map((response: Response) =>response.json())              
  }



  //service to mysql get hotels for star
  getHotelesForStar(star){ 
    var body = "star=" + star ;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });     
    return this.http.post('http://localhost:3100/hotelesPorEstrella/', body, options)  
            .map((response: Response) =>response.json())              
  }

  





    
} 
