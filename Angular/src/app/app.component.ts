import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  counter: number = 0;
  buttonText: string = "Click count: 0";
  
  onClick(e:any){
    this.counter++;
    this.buttonText = "Click count: " + this.counter;
  }
}
