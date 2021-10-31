import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): any{
   return this.headerService.headerData.title
  }

  get icon(): any{
    return this.headerService.headerData.icon
   }

   
   get routeUrl(): any{
    return this.headerService.headerData.routeUrl
   }
 

}
