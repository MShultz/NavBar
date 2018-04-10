import { Component } from '@angular/core';
import { NavItem } from './nav/nav-item/navItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'NavBar';
  navs: NavItem[] = [
    {isOpen:false, iconName:"launch" ,title:"Define", children: [
      {isOpen:true, title:"Menu Item"}
    ]},
    {isOpen:false, iconName:"speaker_notes",title:"Gather", children: [
      {isOpen:true, title:"Forms"},
      {isOpen:true, title:"Audit Results"},
      {isOpen:true, title:"Legacy Forms"},
      {isOpen:true, title:"Print Blank Form"}
    ]},
    {isOpen:false, iconName:"today",title:"See",children: [
      {isOpen:true, title:"Menu Item"}
    ]},
    {isOpen:false, iconName:"person_outline",title:"Act",children:[
      {isOpen:true, title:"Menu Item"}
    ]},
    {isOpen:false, iconName:"settings",title:"Admin",children: [
      {isOpen:true, title:"Menu Item"}
    ]}
  ]  
}
