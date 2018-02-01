import { Component } from '@angular/core';
//expression(interpolation),property, event, class ,style, two waybinding
@Component({
  selector: 'app-about',
  template: `<h1>About Page</h1>
    <h1>{{1+2}}</h1>
    <h1>{{"Sheldon"+" Cooper"}}</h1>

    

    <h2>{{getValue()}}</h2>

    <h3 [class.color]="myProperty">{{myProperty ? "Yes":"No"}}</h3>
    
    <h3 [style.border]="myProp2?'1px solid green':'none'">{{myProp2 ? "Yes":"No"}}</h3>

    <button [disabled]="getValue()">Click</button>
    <button (click)="onClick(10)">Click</button>
    <input type="text" [value]="myProperty"/>

    <h2>{{myProperty}}</h2>
    <input type="text" [(ngModel)]="myProperty"/>
  `

})
export class AboutComponent {

  myProperty: string = "Hello Angular";
  myProp2: boolean = false;

  onClick(param) {
    console.log("Button clicked", param);
  }

  //truthy
  //falsy: 0 false "", undefined nulll Nan

  getValue(): string {
    //simple.
    return "";
  }
}