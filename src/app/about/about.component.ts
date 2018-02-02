import { Component } from '@angular/core';
//expression(interpolation),property, event, class ,style, two waybinding
//Directives ngClass,ngStyle,ngModel,ngIf,ngFor
@Component({
  selector: 'app-about',
  template: `<h4 [ngStyle]="styl" [ngClass]="cls">About Page</h4>
   <h1 *ngIf="myProp2">This is heading</h1>
   
   <table border="1">
    <tr >
      <td>Value</td>
      <td>Index</td>
      <td>Even</td>
      <td>Odd</td>
      <td>First</td>
      <td>Last</td>
    </tr>
    <tr *ngFor="let val of vals;let idx=index;let evn=even;let odd=odd;let fst=first;let lst=last">
      <td>{{val}}</td>
      <td>{{idx}}</td>
      <td>{{evn}}</td>
      <td>{{odd}}</td>
      <td>{{fst}}</td>
      <td>{{lst}}</td>
  </tr>
   </table>

  `

})
export class AboutComponent {

  myProperty: string = "Hello Angular";
  myProp2: boolean = false;
  vals: number[] = [1, 2, 3, 3, 5];
  cls = { color: true, bg: this.myProperty };  //ngClass=>string,array and object
  styl = { border: '5px solid green', 'font-weight': 'bolder', 'font-size': '50px' };


  onClick(param) {
    console.log("Button clicked", param);
  }

  getValue(): string {
    return "";
  }
}