import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable()
export class DataService {
  users: User[];

  constructor() { 
    this.users = [
      // User 1
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 8:30:00'),
        hide: true
      },
      // User 2
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',
        isActive: false,
        registered: new Date('03/11/2017 6:20:00'),
        hide: true
      },
      // User 3
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }

    ];
  }

  getUsers(): User[]{
    return this.users;
  }

  addUser(user: User){
    this.users.unshift(user);
  }

}
