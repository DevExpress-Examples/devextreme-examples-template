import { Injectable } from '@angular/core';

export type Employee = {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  BirthDate: string;
  Address: string;
};

const employees: Employee[] = [
  {
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Prefix: 'Mr.',
    Position: 'CEO',
    BirthDate: '1964/03/16',
    Address: '351 S Hill St.',
  },
  {
    ID: 2,
    FirstName: 'Olivia',
    LastName: 'Peyton',
    Prefix: 'Ms.',
    Position: 'Sales Assistant',
    BirthDate: '1981/06/03',
    Address: '807 W Paseo Del Mar',
  },
  {
    ID: 3,
    FirstName: 'Robert',
    LastName: 'Reagan',
    Prefix: 'Mr.',
    Position: 'CMO',
    BirthDate: '1974/09/07',
    Address: '4 Westmoreland Pl.',
  },
  {
    ID: 4,
    FirstName: 'Greta',
    LastName: 'Sims',
    Prefix: 'Ms.',
    Position: 'HR Manager',
    BirthDate: '1977/11/22',
    Address: '1700 S Grandview Dr.',
  },
  {
    ID: 5,
    FirstName: 'Brett',
    LastName: 'Wade',
    Prefix: 'Mr.',
    Position: 'IT Manager',
    BirthDate: '1968/12/01',
    Address: '1120 Old Mill Rd.',
  },
  {
    ID: 6,
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Prefix: 'Mrs.',
    Position: 'Controller',
    BirthDate: '1974/11/15',
    Address: '4600 N Virginia Rd.',
  },
  {
    ID: 7,
    FirstName: 'Kevin',
    LastName: 'Carter',
    Prefix: 'Mr.',
    Position: 'Shipping Manager',
    BirthDate: '1978/01/09',
    Address: '424 N Main St.',
  },
  {
    ID: 8,
    FirstName: 'Cynthia',
    LastName: 'Stanwick',
    Prefix: 'Ms.',
    Position: 'HR Assistant',
    BirthDate: '1985/06/05',
    Address: '2211 Bonita Dr.',
  },
  {
    ID: 9,
    FirstName: 'Kent',
    LastName: 'Samuelson',
    Prefix: 'Dr.',
    Position: 'Ombudsman',
    BirthDate: '1972/09/11',
    Address: '12100 Mora Dr',
  },
  {
    ID: 10,
    FirstName: 'Taylor',
    LastName: 'Riley',
    Prefix: 'Mr.',
    Position: 'Network Admin',
    BirthDate: '1982/08/14',
    Address: '7776 Torreyson Dr',
  },
  {
    ID: 11,
    FirstName: 'Sam',
    LastName: 'Hill',
    Prefix: 'Mr.',
    Position: 'Sales Assistant',
    BirthDate: '1984/02/17',
    Address: '645 Prospect Crescent',
  },
  {
    ID: 12,
    FirstName: 'Kelly',
    LastName: 'Rodriguez',
    Prefix: 'Ms.',
    Position: 'Support Assistant',
    BirthDate: '1988/05/11',
    Address: '1601 W Mountain St.',
  },
  {
    ID: 13,
    FirstName: 'Natalie',
    LastName: 'Maguirre',
    Prefix: 'Mrs.',
    Position: 'Trainer',
    BirthDate: '1977/10/07',
    Address: '6400 E Bixby Hill Rd',
  },
  {
    ID: 14,
    FirstName: 'Walter',
    LastName: 'Hobbs',
    Prefix: 'Mr.',
    Position: 'Programmer',
    BirthDate: '1984/12/24',
    Address: '10385 Shadow Oak Dr',
  },
];

@Injectable()
export class Service {
  getEmployees() {
    return employees;
  }
}
