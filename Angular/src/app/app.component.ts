import { Component } from '@angular/core';
import { Service, Employee } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  employees: Employee[];

  constructor(service: Service) {
    this.employees = service.getEmployees();
  }
}
