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
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      // User 1
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: 'One Main St.',
          city: 'Houston',
          state: 'TX'
        },
        isActive: true,
        registered: new Date('01/02/2018 8:30:00'),
        hide: true
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
        },
        isActive: false,
        registered: new Date('03/11/2017 6:20:00'),
        hide: true
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
        },
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }

    ];

    this.loaded = true;

    /*this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
      age: 23,
      address: {
        street: '23 Lynn St.',
        city: 'Houston',
        state: 'TX'
      }
    });*/

 
  }

  addUser(user: User){
    this.users.push(user);
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }
}
