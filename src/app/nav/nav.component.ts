import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './nav-item/navItem.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  
  @Input() navs: NavItem[];
}
