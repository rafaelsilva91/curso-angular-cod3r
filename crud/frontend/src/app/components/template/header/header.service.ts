import { HeadeData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

private _headerData = new BehaviorSubject<HeadeData>({
  title: 'SYSTEM',
  icon: 'dashboard',
  routeUrl: ''
})

  constructor() { }


  get headerData(): HeadeData{
    return this._headerData.value;
  }

  set headerData(headerData: HeadeData){
    this._headerData.next(headerData);
  }

}
