import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './navItem.model'
@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent {
color: any = {
  open: '#402f50',
  closed: '#502E6A'
}

  @Input() NavItem: NavItem;
  
  onParentClick(NavItem){
    if(NavItem.children && NavItem.children.length > 0){
      NavItem.isOpen = !NavItem.isOpen;
    }
  }

}
