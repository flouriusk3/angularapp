import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      // User 1
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: 'One Main St.',
          city: 'Houston',
          state: 'TX'
        }
      },
      // User 2
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 N. Main St.',
          city: 'Houston',
          state: 'TX'
        }
      },
      // User 3
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill St.',
          city: 'Houston',
          state: 'TX'
        }
      }

    ];

    this.loaded = true;

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
      age: 23,
      address: {
        street: '23 Lynn St.',
        city: 'Houston',
        state: 'TX'
      }
    });
  }

  addUser(user: User){
    this.users.push(user);
  }

}
