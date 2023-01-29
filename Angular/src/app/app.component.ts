import { Component } from '@angular/core';
import { ClickEvent } from 'devextreme/ui/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  counter: number = 0;
  buttonText: string = "Click count: 0";

  onClick(e: ClickEvent){
    this.counter++;
    this.buttonText = "Click count: " + this.counter;
  }
}
