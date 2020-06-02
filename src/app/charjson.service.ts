import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharjsonService {

  constructor(private _http: HttpClient) { }

  public getJSON(): Observable<any> {
    let response1 =  this._http.get("./assets/data/chart-data.json");
    let response2 =  this._http.get("./assets/data/chart2-data.json");
     // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([response1,response2]);
}
}
